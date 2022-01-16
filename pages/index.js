import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      
      <nav className={utilStyles.menu}>
        <Link href="my-work">Work</Link>
        <Link href="about-me">About Me</Link>
        <Link href="contact">Contact</Link>
      </nav>

    </Layout>
  )
}

//<a href="google.com">Clickable Text</a>