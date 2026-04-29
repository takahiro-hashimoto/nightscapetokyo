import NonCriticalCss from "@/components/layout/NonCriticalCss";
import GtmLoader from "@/components/layout/GtmLoader";
import WebVitalsReporter from "@/components/layout/WebVitalsReporter";
import { SITE_URL } from "@/lib/types";

const GTM_ID = "GTM-WB56L85";

export const metadata = {
  metadataBase: new URL(SITE_URL),
};

export default function BaseLayout({
  lang,
  children,
}: {
  lang: string;
  children: React.ReactNode;
}) {
  const isProd = process.env.NODE_ENV === "production";

  return (
    <html lang={lang}>
      <head>
        {/* AdSense vignette/interstitial 後の mid-scroll を防ぐ。back/forward の SPA 遷移は NavigationProgress で制御 */}
        <script dangerouslySetInnerHTML={{ __html: `
try{if("scrollRestoration"in history){history.scrollRestoration="manual";var _bf=false;try{var _ne=performance.getEntriesByType("navigation")[0];_bf=_ne?_ne.type==="back_forward":performance.navigation.type===2;}catch(_e2){}if(!_bf){var _s=function(){window.scrollTo(0,0);};document.addEventListener("DOMContentLoaded",_s,{once:true});window.addEventListener("load",_s,{once:true});}}}catch(_e){}

/* --- scroll debug (localStorage._sd=1 で有効) --- */
try{if(localStorage.getItem("_sd")==="1"){
  var _sdLog=function(msg,data){
    var e={time:new Date().toISOString(),msg:msg,data:data};
    try{var a=JSON.parse(sessionStorage.getItem("_sdlog")||"[]");a.push(e);sessionStorage.setItem("_sdlog",JSON.stringify(a.slice(-100)));}catch(ex){}
    console.log("[SD]",msg,data||"");
  };
  var _ne2=performance.getEntriesByType("navigation")[0]||{};
  _sdLog("pageload",{navType:_ne2.type,legacyType:performance.navigation?performance.navigation.type:"n/a",scrollY:window.scrollY,scrollRestoration:history.scrollRestoration,referrer:document.referrer,url:location.href,isBackFwd:_bf});
  window.addEventListener("scroll",function(){_sdLog("scroll",{scrollY:window.scrollY,scrollRestoration:history.scrollRestoration});});
  document.addEventListener("DOMContentLoaded",function(){_sdLog("DOMContentLoaded",{scrollY:window.scrollY,scrollRestoration:history.scrollRestoration});});
  window.addEventListener("load",function(){_sdLog("load",{scrollY:window.scrollY,scrollRestoration:history.scrollRestoration});setTimeout(function(){_sdLog("load+500ms",{scrollY:window.scrollY});},500);});
  window._sdRead=function(){return JSON.parse(sessionStorage.getItem("_sdlog")||"[]");};
  window._sdClear=function(){sessionStorage.removeItem("_sdlog");console.log("[SD] cleared");};
  window._sdShare=function(){
    var logs=JSON.parse(sessionStorage.getItem("_sdlog")||"[]");
    var text="\`\`\`json\\n"+JSON.stringify(logs,null,2)+"\\n\`\`\`";
    if(navigator.clipboard){
      navigator.clipboard.writeText(text).then(function(){console.log("[SD] ✅ クリップボードにコピーしました。チャットに貼り付けてください。");}).catch(function(){console.log("[SD] ログ:\\n"+text);});
    }else{
      console.log("[SD] ログ:\\n"+text);
    }
    return logs;
  };
  console.log("[SD] scroll debug ON\\n  _sdShare()  → クリップボードにコピー（チャットに貼るだけ）\\n  _sdRead()   → ログをオブジェクトで確認\\n  _sdClear()  → ログをリセット");
}}catch(_ex){}
`.trim() }} />
        {isProd && <GtmLoader gtmId={GTM_ID} />}
        <link rel="preconnect" href="https://idnhefzhidetbiqiveci.supabase.co" />
        <link
          rel="preconnect"
          href="https://pub-7d430b8241bc4d38b717b9e2905120d8.r2.dev"
          crossOrigin="anonymous"
        />
        {isProd && (
          <>
            <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
            <link
              rel="preconnect"
              href="https://googleads.g.doubleclick.net"
              crossOrigin="anonymous"
            />
          </>
        )}
        <NonCriticalCss href="/css/non-critical.min.css?v=20260425a" />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        {isProd && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        {isProd && <WebVitalsReporter />}
        {children}
      </body>
    </html>
  );
}
