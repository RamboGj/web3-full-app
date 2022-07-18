import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MoralisProvider } from 'react-moralis'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
    <MoralisProvider
      appId={`SMa8PxjHAda4RL9CZ0Q32s5AeBDCyO0x7IfzqJ9S`}
      serverUrl={`https://jyad6pcuw7zo.usemoralis.com:2053/server`}
    >
      <Component {...pageProps} />
    </MoralisProvider>
    </>
    
  )
}

export default MyApp
