import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Fabian Lioner";
export const siteTitle = "Fabian Lioner";

export default function Layout({ children, home, blackbg }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
      </Head>

      {home && (
        <>
          <header className={styles.header}>
            <h1 className={utilStyles.headingLg}>{name}</h1>
          </header>
          <nav className={utilStyles.menu}>
            <Link href="/">Work</Link>
            <Link href="about-me">About Me</Link>
            <Link href="contact">Contact</Link>
          </nav>
        </>
      )}

      <main>{children}</main>

      {/* {!home && (

        <Link href="/">
            <div className={styles.backToHome}>
            <a className={styles.backToHomeText}>Back to home</a>
            </div>
          </Link>
      )} */}
    </div>
  );
}
