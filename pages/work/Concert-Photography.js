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
      </div>

      <div className={utilStyles.fitScreen}>
        <div className={utilStyles.paddingBottom}>
          <CollageAllTallBigRight
            imgTop={
              "https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642826507/Concert%20Photography/_MG_4270-min_vfepya.jpg"
            }
            imgBot={
              "https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642826505/Concert%20Photography/_MG_4205-min_sbijld.jpg"
            }
            imgRight={
              "https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642826506/Concert%20Photography/_MG_4200-min_c3dqt6.jpg"
            }
          >
            {" "}
          </CollageAllTallBigRight>
        </div>

        <div className={utilStyles.paddingBottom}>
          <CollageAllTallBigLeft
            imgTop={
              "https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642826512/Concert%20Photography/B_W2-min_fgskmb.jpg"
            }
            imgBot={
              "https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642826522/Concert%20Photography/b_w4-min_nxhx9q.jpg"
            }
            imgLeft={
              "https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642826512/Concert%20Photography/B_W1-min_vhfjb3.jpg"
            }
          >
            {" "}
          </CollageAllTallBigLeft>
        </div>

        <div className={utilStyles.paddingBottom}>
          <CollageAllTallBigRight
            imgTop={
              "https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642826518/Concert%20Photography/_MG_4566-min_x9tgze.jpg"
            }
            imgBot={
              "https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642826516/Concert%20Photography/_MG_4576-min_gztrcp.jpg"
            }
            imgRight={
              "https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642826515/Concert%20Photography/_MG_4529-min_w8sjpl.jpg"
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
