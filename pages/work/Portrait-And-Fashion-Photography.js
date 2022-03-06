import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import React from "react";
import utilStyles from "../../styles/utils.module.css";
import { Socials, BottomName } from "../../components/socials";
import {
  CollageBigTallLeftUneven,
  TwoImageCollageTallLeft,
} from "../../components/dynamic_images";

export default function FirstPost() {
  return (
    <Layout blackbg>
      <div className={utilStyles.fitScreen3}>
        <Head>
          <title>Portrait And Fashion Photography</title>
          <meta
            name="Portrait, Event and Fashion Photography"
            content="Photo Sessions, Fashion Photography, Portraits, Weddings and more! It pays off to take risks and do experimental photography to get the best shots possible."
          />
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

          <CollageBigTallLeftUneven
            imgLeft={
              "https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642378891/Portrait%20and%20Fashion%20Photography/Moda_1_wyt57z.jpg"
            }
            imgTop={
              "https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642378995/Portrait%20and%20Fashion%20Photography/moda_2_sm3hls.jpg"
            }
            imgBot={
              "https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642326044/Portrait%20and%20Fashion%20Photography/moda_3_l1uu2v.jpg"
            }
          />

          <TwoImageCollageTallLeft
            imgLeft={
              "https://res.cloudinary.com/dgb1oqgt3/image/upload/v1643096058/Portrait%20and%20Fashion%20Photography/moda_4_imka89.jpg"
            }
            imgRight={
              "https://res.cloudinary.com/dgb1oqgt3/image/upload/v1643096058/Portrait%20and%20Fashion%20Photography/moda_5_gpqqam.jpg"
            }
          />
        </div>
      </div>
      <Socials />
      <BottomName />
    </Layout>
  );
}
