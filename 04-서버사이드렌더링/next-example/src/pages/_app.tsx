import type { AppContext, AppProps } from 'next/app'
import App from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

MyApp.getInitialProps = async (context: AppContext) => {
  const appProps = await App.getInitialProps(context)
  const isServer = Boolean(context.ctx.req)
  console.log(
    `[${isServer ? 'server' : 'client'}] ${context.router.pathname}에서 ${
      context.ctx.req?.url
    }를 요청함`
  )
  return appProps
}
