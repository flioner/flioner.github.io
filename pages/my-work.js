import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Fabian Lioner - My Work</title>
      </Head>

      <div className={utilStyles.menu2}>
        <div className={utilStyles.menu4}>My Work</div>
        <div className={utilStyles.menu3}>
          <Link href="/">Homepage</Link>
          <Link href="about-me">About Me</Link>
          <Link href="contact">Contact</Link>
        </div>
      </div>
    </Layout>
  );
}
