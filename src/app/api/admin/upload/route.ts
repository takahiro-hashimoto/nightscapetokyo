import { NextRequest, NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import sharp from "sharp";
import { requireAdmin } from "@/lib/admin/auth";
import { VARIANT_WIDTHS, VARIANT_QUALITY, variantKey } from "@/lib/image-variants";

export const runtime = "nodejs";

/*
 * 旧実装は署名付きURLを返してブラウザ→R2直PUTだったが、R2直配信
 * （next/image カスタム loader）に必要な幅別 webp バリアントを
 * サーバー側で sharp 生成するため、multipart でファイルを受け取る方式に変更。
 * 生成物: 元ファイル + <key>.w{180,256,384,640,828,960,1280,1920}.webp
 */

const s3 = new S3Client({
  region: "auto",
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
  },
});

// 許可する画像MIMEタイプ
const ALLOWED_TYPES: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/gif": "gif",
};

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB

const IMMUTABLE_CACHE = "public, max-age=31536000, immutable";

export async function POST(req: NextRequest) {
  const admin = await requireAdmin();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ error: "不正なリクエストです" }, { status: 400 });
  }

  const file = form.get("file");
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "file フィールドが必要です" }, { status: 400 });
  }
  if (!file.name || file.name.length > 255) {
    return NextResponse.json({ error: "不正なファイル名です" }, { status: 400 });
  }
  if (!ALLOWED_TYPES[file.type]) {
    return NextResponse.json({ error: "許可されていないファイル形式です" }, { status: 400 });
  }
  if (file.size > MAX_FILE_SIZE) {
    return NextResponse.json({ error: "ファイルサイズが上限（10MB）を超えています" }, { status: 413 });
  }

  // R2のキーを生成: uploads/YYYY/MM/タイムスタンプ-元ファイル名
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-").toLowerCase();
  const r2Key = `uploads/${year}/${month}/${Date.now()}-${safeName}`;

  const buf = Buffer.from(await file.arrayBuffer());

  try {
    const puts: Promise<unknown>[] = [
      s3.send(
        new PutObjectCommand({
          Bucket: process.env.R2_BUCKET_NAME!,
          Key: r2Key,
          Body: buf,
          ContentType: file.type,
          CacheControl: IMMUTABLE_CACHE,
        })
      ),
    ];

    // GIF はアニメーション保持のためバリアント非生成（loader 側でも素通しする）
    if (file.type !== "image/gif") {
      const base = sharp(buf).rotate(); // EXIF の向きを反映
      for (const width of VARIANT_WIDTHS) {
        puts.push(
          base
            .clone()
            .resize({ width, withoutEnlargement: true })
            .webp({ quality: VARIANT_QUALITY })
            .toBuffer()
            .then((variantBuf) =>
              s3.send(
                new PutObjectCommand({
                  Bucket: process.env.R2_BUCKET_NAME!,
                  Key: variantKey(r2Key, width),
                  Body: variantBuf,
                  ContentType: "image/webp",
                  CacheControl: IMMUTABLE_CACHE,
                })
              )
            )
        );
      }
    }

    await Promise.all(puts);
  } catch (err) {
    console.error("[admin/upload] R2 upload failed:", r2Key, err);
    return NextResponse.json({ error: "アップロードに失敗しました" }, { status: 500 });
  }

  const publicUrl = `${process.env.R2_PUBLIC_URL}/${r2Key}`;
  return NextResponse.json({ publicUrl });
}
