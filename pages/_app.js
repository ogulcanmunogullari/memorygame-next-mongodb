import Head from "next/head"
import "../styles/globals.css"
import { store } from "../redux/store"
import { Provider } from "react-redux"

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Card Game By Oğulcan</title>
        <meta name="description" content="Develop By Oğulcan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
