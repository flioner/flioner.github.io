import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Fabian Lioner'
export const siteTitle = 'Fabian Lioner'

export default function Layout({ children, home, blackbg}) {
  return (
    <div className={styles.container}>

      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
      </Head>

      <header className={styles.header}>
        {home && (
            <h1 className={utilStyles.headingL}>{name}</h1>
        ) }
      </header>

      <main>{children}</main>

      {!home && (
          <div>

          </div>

          /*<Link href="/">
            <div className={styles.backToHome}>
            <a className={styles.backToHomeText}>Back to home</a>
            </div>
          </Link> */      
      )}
    </div>
  )
}
