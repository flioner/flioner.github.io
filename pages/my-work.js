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

        <Image layout="responsive"
            priority
            src="v1642298835/sample.jpg"
            height={"400px"}
            width={"600px"}
        />

        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>

      </Layout>
    )
  }