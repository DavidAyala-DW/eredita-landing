import '../styles/globals.scss'
import {AppProvider } from "../helpers/Context";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>    
  )
}

export default MyApp
