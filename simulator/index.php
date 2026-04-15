<!DOCTYPE html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="description" content="日の出・日の入りの方角や時刻を日毎に表示できる計算ツール（webアプリ）です。朝日がどこから昇るのか、夕日がどこへ沈むのかなどを簡単にチェックできるので、旅行や写真撮影に出かける時にぜひご活用ください！">
<meta name="keywords" content="日の出,日の入り,方角,方向,日没,朝日,夕日,日食,夏至,冬至,初日の出">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css">
<link rel="stylesheet" href="https://unpkg.com/modern-css-reset/dist/reset.min.css"/>
<link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
<link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/modaal@0.4.4/dist/css/modaal.min.css">

<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WB56L85');</script>

<title>日の出・日の入りナビ|朝日と夕日の方角と時刻がわかるシミュレーションアプリ</title>
</head>

<body>
<?php

// ユーザーエージェントを取得
$userAgent = $_SERVER['HTTP_USER_AGENT'];

// スマートフォンを含む一般的なユーザーエージェントのパターン
$mobilePatterns = array('/iphone/i', '/ipod/i', '/android/i', '/blackberry/i', '/windows phone/i');

$isMobile = false;

// ユーザーエージェントがモバイルデバイスのものかどうかを判定
foreach ($mobilePatterns as $pattern) {
    if (preg_match($pattern, $userAgent)) {
        $isMobile = true;
        break;
    }
}

if ($isMobile) {
    include 'sp.php';
} else {

    include 'pc.php';
}

?>

<?php if ($isMobile) : ?>
<link rel="stylesheet" href="./css/sp_style.css">
<?php else : ?>
<link rel="stylesheet" href="./css/pc_style.css">
<?php endif ; ?>

<script src="https://code.jquery.com/jquery-3.3.1.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script src="./script/datepicker-ja.js"></script>
<script src="https://cdn.jsdelivr.net/npm/modaal@0.4.4/dist/js/modaal.min.js"></script>
<script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.30.1/moment.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/suncalc@1.8.0/suncalc.js"></script>
<?php
// .env.local から API キーを読み込み
$envFile = __DIR__ . '/../.env.local';
$googleMapsApiKey = '';
if (file_exists($envFile)) {
    $lines = file($envFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (strpos($line, 'NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=') === 0) {
            $googleMapsApiKey = substr($line, strlen('NEXT_PUBLIC_GOOGLE_MAPS_API_KEY='));
            break;
        }
    }
}
?>
<script src="https://maps.googleapis.com/maps/api/js?key=<?php echo htmlspecialchars($googleMapsApiKey); ?>"></script>
<?php if ($isMobile) : ?>
<script src="./script/sp_script.js"></script>
<?php else : ?>
<script src="./script/pc_script.js"></script>
<?php endif ; ?>

<script type="application/ld+json">
[
  {
    "@type": "Organization",
    "@id": "https://nightscape.tokyo/#organization",
    "name": "東京夜景ナビ",
    "url": "https://nightscape.tokyo/",
    "logo": {
      "@type": "ImageObject",
      "url": "https://nightscape.tokyo/wp-content/uploads/2023/07/logo.png",
      "width": 556,
      "height": 115
    },
    "sameAs": [
      "https://smartparty.jp/",
      "https://www.youtube.com/channel/UC9yW3aWxcbbsHXapqy87bFw",
      "https://twitter.com/takahiro_photo"
    ],
    "founder": {
      "@type": "Person",
      "name": "タカヒロ",
      "url": "https://nightscape.tokyo/about/",
      "sameAs": [
        "https://smartparty.jp/",
        "https://www.youtube.com/channel/UC9yW3aWxcbbsHXapqy87bFw",
        "https://twitter.com/takahiro_photo"
      ]
    }
  },{
    "@type": "WebSite",
    "@id": "https://nightscape.tokyo/#website",
    "url": "https://nightscape.tokyo/",
    "name": "東京夜景ナビ",
    "description": "旅行・デートにおすすめの東京の夜景スポットを定番から穴場まで紹介"
  }
]
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "東京夜景ナビ",
    "item": "https://nightscape.tokyo/"
  },{
    "@type": "ListItem",
    "position": 2,
    "name": "【日の出・日の入りナビ】朝日と夕日の方角と時刻がわかるシミュレーションアプリ",
    "item": "https://nightscape.tokyo/simulator/"
  }]
}
</script>

<script type="application/ld+json">
  
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "【日の出・日の入りナビ】朝日と夕日の方角と時刻がわかるシミュレーションアプリ",
  "description": "日の出と日の入りの時刻や方角を地図上で確認できるWebアプリ。マーカーを移動して指定地点の情報も簡単にチェック可能。",
  "applicationCategory": "UtilityApplication",
  "applicationSubCategory": "日照シミュレーション",
  "operatingSystem": "Web",
  "url": "https://nightscape.tokyo/simulator/",
  "keywords": "日の出, 日の入り, 方角, マーカー, 地図, シミュレーション",
  "countriesSupported": ["JP"]
}

</script>

</body>