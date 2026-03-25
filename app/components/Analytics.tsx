const AW_TAG_ID = 'AW-17672216220'

/**
 * Google Ads tag (gtag.js)
 * Tracks conversions for Google Ads campaign AW-17672216220
 */
export default function Analytics() {
  return (
    <>
      {/* Google tag (gtag.js) */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${AW_TAG_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${AW_TAG_ID}');
          `,
        }}
      />
    </>
  )
}
