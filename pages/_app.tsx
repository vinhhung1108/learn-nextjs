import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AppPropsWithLayout } from 'models'
import { EmptyLayout } from '@/components/layout'

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  console.log('app rerender')
  const Layout = Component.Layout ?? EmptyLayout;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
