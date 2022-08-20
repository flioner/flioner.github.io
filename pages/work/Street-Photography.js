import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import React from "react";
import utilStyles from "../../styles/utils.module.css";
import { Socials, BottomName } from "../../components/socials";

import {
  CollageAllTallBigRight,
  CollageAllTallBigLeft,
} from "../../components/dynamic_images";

export default function FirstPost() {
  return (
    <Layout blackbg>
      <div className={utilStyles.fitScreen}>
        <Head>
          <title>Street Photography</title>
          <meta
            name="Street Photography"
            content="Street Photography is unparalled in its ability to capture mundane life"
          />
        </Head>
        <div className={utilStyles.menu2}>
          <div className={utilStyles.menu4}>Street Photography</div>
          <div className={utilStyles.menu3}>
            <Link href="/">Homepage</Link>
            <Link href="../about-me">About Me</Link>
            <Link href="../contact">Contact</Link>
          </div>
        </div>
      </div>

      <div className={utilStyles.fitScreen}>
        <div className={utilStyles.paddingBottomMedium}>
          <CollageAllTallBigLeft
            imgTop={
              "https://res.cloudinary.com/dgb1oqgt3/image/upload/v1660957982/Street%20Photography/Street_5_a38xpa.jpg"
            }
            imgBot={
              "https://res.cloudinary.com/dgb1oqgt3/image/upload/v1660957982/Street%20Photography/Street_6_vnctl5.jpg"
            }
            imgLeft={
              "https://res.cloudinary.com/dgb1oqgt3/image/upload/v1660957982/Street%20Photography/Street_4_kjuo6w.jpg"
            }
          >
            {" "}
          </CollageAllTallBigLeft>
        </div>

        <div className={utilStyles.paddingBottomMedium}>
          <CollageAllTallBigRight
            imgTop={
              "https://res.cloudinary.com/dgb1oqgt3/image/upload/v1660957981/Street%20Photography/Street_2_eturkw.jpg"
            }
            imgBot={
              "https://res.cloudinary.com/dgb1oqgt3/image/upload/v1660957981/Street%20Photography/Street_3_ewi7eg.jpg"
            }
            imgRight={
              "https://res.cloudinary.com/dgb1oqgt3/image/upload/v1660957982/Street%20Photography/Street_1_rbxlgh.jpg"
            }
          >
            {" "}
          </CollageAllTallBigRight>
        </div>
      </div>
      <Socials />
      <BottomName />
    </Layout>
  );
}
