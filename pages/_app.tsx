import 'normalize.css'
import '../styles/fonts.css'
import '../styles/title.scss'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
