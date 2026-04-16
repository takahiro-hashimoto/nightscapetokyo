"use client";

/**
 * Non-critical CSS loader using the media="print" trick.
 * Must be a Client Component because onLoad is an event handler.
 */
export default function NonCriticalCss({ href }: { href: string }) {
  return (
    <>
      <link
        rel="stylesheet"
        href={href}
        media="print"
        onLoad={(e) => {
          (e.currentTarget as HTMLLinkElement).media = "all";
        }}
      />
      <noscript>
        <link rel="stylesheet" href={href} />
      </noscript>
    </>
  );
}
