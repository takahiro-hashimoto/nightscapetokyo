import Link from "next/link";

export type Video = {
  id: string;
  title: string;
  caption?: string;
  captionLink?: string;
};

/** movie フィールドの HTML から YouTube ID をすべて抽出する */
export function extractYouTubeIds(html: string): string[] {
  return [...html.matchAll(/youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/g)].map((m) => m[1]);
}

/** YouTube 動画埋め込み。captionSuffix はキャプションリンクの後ろに付く文字列（例: "の夕景タイムラプス"） */
export function YouTubeEmbed({ video, captionSuffix }: { video: Video; captionSuffix?: string }) {
  return (
    <figure className="tl-video-figure">
      <div className="video-embed">
        <iframe
          src={`https://www.youtube.com/embed/${video.id}`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      {video.caption && (
        <figcaption className="video-caption">
          {video.captionLink ? (
            <Link href={video.captionLink}>{video.caption}</Link>
          ) : (
            video.caption
          )}
          {video.captionLink && captionSuffix ? captionSuffix : ""}
        </figcaption>
      )}
    </figure>
  );
}
