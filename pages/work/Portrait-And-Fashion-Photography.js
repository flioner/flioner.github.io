import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import React from "react";
import utilStyles from "../../styles/utils.module.css";
import Socials from "../../components/socials";

export default function FirstPost() {
  return (
    <Layout blackbg>
      <div className={utilStyles.fitScreen3}>
        <Head>
          <title>Portrait And Fashion Photography</title>
        </Head>
        <div className={utilStyles.fitScreen2}>
          <div className={utilStyles.menu2}>
            <div className={utilStyles.menu4}>
              Portrait And Fashion Photography
            </div>
            <div className={utilStyles.menu3}>
              <Link href="/">Homepage</Link>
              <Link href="../about-me">About Me</Link>
              <Link href="../contact">Contact</Link>
            </div>
          </div>

          <div className={utilStyles.collage_Big_Tall_Left_Container}>
            <img
              className={utilStyles.big_tall_left}
              src="https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642378891/Portrait%20and%20Fashion%20Photography/Moda_1_wyt57z.jpg"
            />
            <img
              className={utilStyles.small_tall_top_right}
              src="https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642378995/Portrait%20and%20Fashion%20Photography/moda_2_sm3hls.jpg"
            />
            <img
              className={utilStyles.small_wide_bottom_right}
              src="https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642326044/Portrait%20and%20Fashion%20Photography/moda_3_l1uu2v.jpg"
            />
          </div>

          <div className={utilStyles.ImgFlexContainer}>
            <img
              className={utilStyles.portrait4to6_2_2}
              src="https://res.cloudinary.com/dgb1oqgt3/image/upload/v1643096058/Portrait%20and%20Fashion%20Photography/moda_4_imka89.jpg"
            />
            <img
              className={utilStyles.portrait6to4}
              src="https://res.cloudinary.com/dgb1oqgt3/image/upload/v1643096058/Portrait%20and%20Fashion%20Photography/moda_5_gpqqam.jpg"
            />
          </div>
        </div>
      </div>
      <Socials />
    </Layout>
  );
}
