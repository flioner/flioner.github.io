import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";
import React from "react";
import ReactPlayer from "react-player";
import utilStyles from "../styles/utils.module.css";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Fabian Lioner - Contact</title>
      </Head>

      <div className={utilStyles.menu2}>
        <div className={utilStyles.menu4}>Contact</div>
        <div className={utilStyles.menu3}>
          <Link href="/">Homepage</Link>
          <Link href="about-me">About Me</Link>
        </div>
      </div>
    </Layout>
  );
}
