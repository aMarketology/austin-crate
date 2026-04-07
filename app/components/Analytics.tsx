const GA4_ID = 'G-8G3X2DX8L2'
const AW_TAG_ID = 'AW-17672216220'

/**
 * Google tag (gtag.js)
 * GA4 measurement: G-8G3X2DX8L2
 * Google Ads conversion: AW-17672216220
 * One script tag per page — both IDs configured here.
 */
export default function Analytics() {
  return (
    <>
      {/* Google tag (gtag.js) */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA4_ID}');
            gtag('config', '${AW_TAG_ID}');
          `,
        }}
      />
    </>
  )
}
