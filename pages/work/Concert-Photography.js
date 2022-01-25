import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import React from "react";
import utilStyles from "../../styles/utils.module.css";
import Socials from "../../components/socials";

export default function FirstPost() {
  return (
    <Layout blackbg>
      <Head>
        <title>Concert Photography</title>
      </Head>

      <div className={utilStyles.menu2}>
        <div className={utilStyles.menu4}>Concert Photography</div>
        <div className={utilStyles.menu3}>
          <Link href="/">Homepage</Link>
          <Link href="../about-me">About Me</Link>
          <Link href="../contact">Contact</Link>
        </div>
      </div>
    </Layout>
  );
}

//<Socials />;
