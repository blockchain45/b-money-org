import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>B-money.org</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="B-money.org" />
        <p className="Electroncic cash system">
          B-money, Bitcoin Core Refined <code>Build on B-money</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
