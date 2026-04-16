import PrBanner from "@/components/common/PrBanner";

export default function HomePrBanner() {
  return (
    <div className="mb-xl">
      <PrBanner
        heading="【PR】ヘリコプター遊覧で一生の思い出に残る感動体験を。"
        image={{
          src: "https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev/uploads/2024/08/air.jpg",
        }}
        paragraphs={[
          "AIROS Skyviewでは、22~55分の多彩なヘリコプター遊覧コースをご用意しています。",
          "上空600mから眺める夜景は、まるで宝石を散りばめたような輝き。見渡す限りの光の大海原に、心奪われること間違いなしです。",
          "プロポーズや記念日など、特別な瞬間を一生忘れられない思い出にしませんか？",
        ]}
        links={[
          {
            label: "▸ 遊覧コースの詳細を見る",
            href: "https://airos-skyview.jp/cruising/?utm_source=nightscape&utm_medium=referral",
            variant: "filled",
            external: true,
          },
          {
            label: "▸ 体験記事を読む",
            href: "/article/airos-skyview",
            variant: "outline",
          },
        ]}
      />
    </div>
  );
}
