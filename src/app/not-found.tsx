import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found-container">
      <h1 className="not-found-code">404</h1>
      <p className="not-found-title">ページが見つかりませんでした</p>
      <p className="not-found-desc">
        お探しのページは移動または削除された可能性があります。
      </p>
      <Link href="/" className="not-found-btn">
        トップページに戻る
      </Link>
    </div>
  );
}
