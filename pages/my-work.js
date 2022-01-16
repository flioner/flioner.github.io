import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/layout'


export default function FirstPost() {
    return (
      <Layout>
          
        <Head>
          <title>Uwuntu</title>
        </Head>

        <h1>My Work</h1>

        <Image
            priority
            src="/images/clothing.png"
            height={1000}
            width={1000}
        />

        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>

      </Layout>
    )
  }