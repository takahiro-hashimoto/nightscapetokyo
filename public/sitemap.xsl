<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html lang="ja">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Sitemap — nightscape.tokyo</title>
        <style>
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-size: 14px; color: #333; background: #f7f7f7; }
          header { background: #111; color: #fff; padding: 20px 32px; }
          header h1 { font-size: 18px; font-weight: 600; }
          header p { font-size: 12px; color: #aaa; margin-top: 4px; }
          .container { max-width: 1100px; margin: 24px auto; padding: 0 16px; }
          .count { color: #888; font-size: 12px; margin-bottom: 12px; }
          table { width: 100%; border-collapse: collapse; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 4px rgba(0,0,0,.08); }
          thead { background: #f0f0f0; }
          th { text-align: left; padding: 10px 16px; font-size: 12px; font-weight: 600; color: #555; text-transform: uppercase; letter-spacing: .05em; border-bottom: 1px solid #e0e0e0; }
          td { padding: 9px 16px; border-bottom: 1px solid #f0f0f0; vertical-align: middle; }
          tr:last-child td { border-bottom: none; }
          tr:hover td { background: #fafafa; }
          td a { color: #1a73e8; text-decoration: none; word-break: break-all; }
          td a:hover { text-decoration: underline; }
          .badge { display: inline-block; padding: 2px 7px; border-radius: 4px; font-size: 11px; font-weight: 500; }
          .freq { background: #e8f0fe; color: #1a73e8; }
          .pri-high { background: #e6f4ea; color: #137333; }
          .pri-mid  { background: #fef7e0; color: #7a4f00; }
          .pri-low  { background: #f1f3f4; color: #5f6368; }
        </style>
      </head>
      <body>
        <header>
          <h1>nightscape.tokyo — Sitemap</h1>
          <p>This is an XML sitemap for search engines.</p>
        </header>
        <div class="container">
          <xsl:apply-templates select="*"/>
        </div>
      </body>
    </html>
  </xsl:template>

  <!-- Sitemap Index -->
  <xsl:template match="*[local-name()='sitemapindex']">
    <p class="count">
      <xsl:value-of select="count(*[local-name()='sitemap'])"/>
      <xsl:text> sitemaps</xsl:text>
    </p>
    <table>
      <thead>
        <tr><th>URL</th><th>Last Modified</th></tr>
      </thead>
      <tbody>
        <xsl:for-each select="*[local-name()='sitemap']">
          <tr>
            <td>
              <a href="{*[local-name()='loc']}">
                <xsl:value-of select="*[local-name()='loc']"/>
              </a>
            </td>
            <td><xsl:value-of select="*[local-name()='lastmod']"/></td>
          </tr>
        </xsl:for-each>
      </tbody>
    </table>
  </xsl:template>

  <!-- URL Set -->
  <xsl:template match="*[local-name()='urlset']">
    <p class="count">
      <xsl:value-of select="count(*[local-name()='url'])"/>
      <xsl:text> URLs</xsl:text>
    </p>
    <table>
      <thead>
        <tr>
          <th>URL</th>
          <th>Last Modified</th>
          <th>Freq</th>
          <th>Priority</th>
        </tr>
      </thead>
      <tbody>
        <xsl:for-each select="*[local-name()='url']">
          <xsl:variable name="priority" select="*[local-name()='priority']"/>
          <tr>
            <td>
              <a href="{*[local-name()='loc']}">
                <xsl:value-of select="*[local-name()='loc']"/>
              </a>
            </td>
            <td><xsl:value-of select="*[local-name()='lastmod']"/></td>
            <td>
              <xsl:if test="*[local-name()='changefreq']">
                <span class="badge freq">
                  <xsl:value-of select="*[local-name()='changefreq']"/>
                </span>
              </xsl:if>
            </td>
            <td>
              <xsl:if test="$priority">
                <xsl:choose>
                  <xsl:when test="number($priority) >= 0.8">
                    <span class="badge pri-high"><xsl:value-of select="$priority"/></span>
                  </xsl:when>
                  <xsl:when test="number($priority) >= 0.5">
                    <span class="badge pri-mid"><xsl:value-of select="$priority"/></span>
                  </xsl:when>
                  <xsl:otherwise>
                    <span class="badge pri-low"><xsl:value-of select="$priority"/></span>
                  </xsl:otherwise>
                </xsl:choose>
              </xsl:if>
            </td>
          </tr>
        </xsl:for-each>
      </tbody>
    </table>
  </xsl:template>

</xsl:stylesheet>
