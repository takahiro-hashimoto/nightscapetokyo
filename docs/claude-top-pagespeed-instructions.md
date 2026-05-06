# Claude向け指示書: topページのPageSpeed改善

## 目的

`/` の PageSpeed Insights スコア改善、とくに以下の指摘の改善を優先してください。

- JavaScript の実行時間の削減
- メインスレッド処理の最小化
- Script Evaluation の削減

今回の改善は、見た目の大きな変更よりも、初期表示時のクライアント JavaScript 実行量削減を優先してください。

## 背景

現状、PageSpeed Insights では top ページのスコアが低く、以下の傾向があります。

- 自サイト由来の JavaScript 実行時間が大きい
- GTM 配下の第三者タグが重い
- Script Evaluation と Style/Layout の時間が長い

コード確認ベースでは、top 固有の極端に重い処理が1つあるというより、共通レイアウト配下の client component と第三者タグの積み上がりで悪化している可能性が高いです。

## 最重要の改善方針

以下を優先度順に進めてください。

### 1. 共通クライアントJSを減らす

特に以下を確認してください。

- `src/components/layout/RootShell.tsx`
- `src/components/ads/AdSenseConditional.tsx`
- `src/components/layout/NavigationProgressSlot.tsx`
- `src/components/layout/NavigationProgress.tsx`
- `src/components/layout/GtmLoader.tsx`

ポイント:

- top の初期表示に不要な client component が常時 hydration されていないか確認する
- 広告や GTM 本体を遅延していても、その遅延制御のための client component 自体が初回 JS に載っていないか確認する
- `usePathname()` や `useSearchParams()` に依存する共通 wrapper が top の初回描画に必須か見直す

理想:

- top 初回表示では、共通レイアウト配下の client component をできるだけ減らす
- 必要なら top だけ別経路にする

### 2. ヘッダー関連の client 化範囲を縮小する

特に以下を確認してください。

- `src/components/layout/Header.tsx`
- `src/components/layout/DesktopNavDropdown.tsx`
- `src/components/layout/MobileMenuLoader.tsx`
- `src/components/layout/MobileMenu.tsx`
- `src/components/spot/LanguageSwitcher.tsx`

ポイント:

- Desktop dropdown が JS 必須でなくても成立するなら CSS ベースに寄せる
- Mobile menu は初回から読み込まず、必要時ロードできるか検討する
- `LanguageSwitcher` は portal と router push を使っているが、top 初期表示に必須か再検討する

目的:

- root に載る共通 chunk の削減
- top で即時に実行される hydration コスト削減

### 3. top 固有の client island を後ろ倒しする

特に以下を確認してください。

- `src/app/(ja)/(public)/(root)/page.tsx`
- `src/components/home/HeroSection.tsx`
- `src/components/home/HeroSearchInput.tsx`
- `src/components/spot/SpotShare.tsx`

ポイント:

- `HeroSearchInput` は通常の検索フォームを server component / 素の form に近づけ、サジェスト機能は `focus` 後または interaction 後に読み込めないか検討する
- `SpotShare` は top 初期表示に必須ではないため、遅延描画や client 読み込みの後ろ倒しを検討する
- 初期表示で絶対に触られない UI は hydration を急がない

### 4. 地図セクションの初回ペイロードを減らす

特に以下を確認してください。

- `src/components/home/HomeMapSection.tsx`
- `src/components/map/SpotMapLoader.tsx`
- `src/lib/supabase/queries/maps.ts`

現状の着眼点:

- Leaflet 本体は遅延ロードされている
- ただし `initialSpots` で map 用データをクライアントへ先渡ししている
- `MapSpotItem` には初回表示で不要な項目が含まれている可能性がある

やってほしいこと:

- top 初回では placeholder だけ表示し、地図表示直前に API fetch する方式を検討する
- 先渡しが必要なら、必要最小限のフィールドに削る
- RSC payload / client payload の削減を優先する

## GTM / 広告タグについて

スクリーンショット上では以下の第三者リソースが目立っています。

- Google Tag Manager
- gtag.js
- Google Funding Choices
- Google/DoubleClick Ads
- Clarity

コード上では直接埋め込みが少なく、GTM 配下から読み込まれている可能性があります。

そのため、コード修正だけでなく、以下の観点も意識してください。

- GTM の発火条件を見直せる設計にする
- top 初回表示で不要なタグは scroll 後や consent 後に遅らせる
- 同種タグの二重計測や重複発火余地がないか確認する

ただし今回 Claude に期待する主作業は、まずアプリ側で減らせる初期JSの削減です。

## 作業時の優先順位

以下の順で検討・実装してください。

1. `RootShell` 配下の共通 client wrapper の削減
2. Header / menu / language switcher の client 化見直し
3. HeroSearchInput の遅延 hydration 化
4. SpotShare の後ろ倒し
5. Map セクションの payload 削減

## 制約

- UI や SEO を壊さないこと
- top ページの主要導線を維持すること
- 機能削除より、遅延読み込み・server component 化・conditional loading を優先すること
- GTM や広告の収益影響が大きい場合は、完全削除ではなく遅延発火を優先すること

## 期待する成果物

以下を出してください。

1. 改善内容の実装
2. どの変更が何のコスト削減を狙っているかの説明
3. 必要なら未対応課題の整理
4. 可能であれば `npm run build` ベースで問題ないことの確認

## 変更候補の例

以下は実装候補の例です。これに縛られず、より良い方法があれば採用してください。

- `AdSenseConditional` を top では使わない構成に変更
- `NavigationProgress` を top 初期表示で不要なら外す、または読み込み条件を厳しくする
- `DesktopNavDropdown` を CSS hover/focus ベースへ寄せて server component 化
- `MobileMenu` をクリック時 import に変更
- `HeroSearchInput` を通常 form + enhancement に変更
- `SpotShare` を dynamic import + interaction/viewport 後に変更
- `HomeMapSection` の `initialSpots` を削減または廃止

## 最後に

最重要テーマは「top 初回表示に本当に必要な JavaScript だけを残す」ことです。

見た目を変えずに、

- client component を server component に寄せる
- interaction まで不要な機能を遅らせる
- 共通レイアウト由来の初期JSを減らす

この3点を強く意識して進めてください。
