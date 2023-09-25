import Script from 'next/script'

function Analytics() {
  return (
    <div className="container">
      <Script id="analyticscript1" async src="https://www.googletagmanager.com/gtag/js?id=G-F6Q0S0C2Q7"></Script>
      <Script id="analyticscript2">
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());

        gtag('config', 'G-F6Q0S0C2Q7');
      </Script>
    </div>
  )
}

export default Analytics