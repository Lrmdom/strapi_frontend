import App from "next/app"
import Head from "next/head"
import ErrorPage from "next/error"
import { useRouter } from "next/router"
import { DefaultSeo } from "next-seo"
import { getStrapiMedia } from "utils/media"
import { getGlobalData } from "utils/api"
//import { getCPQData } from "utils/api"
import { getProviders, signIn, signOut, SessionProvider, getSession, useSession } from "next-auth/react"

import "@/styles/index.css"
const MyApp = ({ Component, pageProps: { session, ...pageProps }, }) => {
  // Extract the data we need

  const { global } = pageProps

  /* if (global == null) {
     return <ErrorPage statusCode={404} />
   }*/
  if (global) {
    const { metadata, favicon, metaTitleSuffix } = global.attributes

    return (
      <>
        {/* Favicon */}
        <Head>
          <link
            rel="shortcut icon"
            href={getStrapiMedia(favicon.data.attributes.url)}
          />
        </Head>

        {/* Global site metadata */}
        <DefaultSeo
          titleTemplate={`%s | ${metaTitleSuffix}`}
          title="Page"
          description={metadata.metaDescription}
          openGraph={{
            //svg images dont work
            images:
              Object.values(
                metadata.shareImage.data.attributes.formats,
              ).map((image) => {
                return {
                  url: getStrapiMedia(image.url),
                  width: image.width,
                  height: image.height,
                }
              }),
          }}
          twitter={{
            cardType: metadata.twitterCardType,
            handle: metadata.twitterUsername,
          }}
        />
        {/* Display the content */}

         {/* <SessionProvider session={session}>


        </SessionProvider>*/}
        <Component {...pageProps} />

      </>
    )
  } else {
    return (
      <>
)
        <Component {...pageProps} />
        {/*<SessionProvider session={session}>


          <Component {...pageProps} />
        </SessionProvider>*/}
      </>
    )
  }

}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So [[...slug]] pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
/*MyApp.getInitialProps = async (appContext) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext)
  const globalLocale = await getGlobalData(appContext.router.locale)
  //const cpqData = await getCPQData(appContext.router.locale)
  return {
    ...appProps,
    pageProps: {
      global: globalLocale,
      //cpqData: cpqData,
      session: getSession()
    },

  }
}*/

export default MyApp
