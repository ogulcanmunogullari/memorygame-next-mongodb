import Head from "next/head"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Card Game By Oğulcan</title>
        <meta name="description" content="Develop By Oğulcan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
