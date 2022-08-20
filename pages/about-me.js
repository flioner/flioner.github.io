import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import React from "react";
import utilStyles from "../styles/utils.module.css";
import { Socials } from "../components/socials";
import { BottomName } from "../components/socials";

export default function FirstPost() {
  return (
    <Layout blackbg>
      <Head>
        <title>Fabian Lioner - About Me</title>
        <meta
          name="Fabian Lioner - About Me"
          content="I am a Photographer and 3D Artist, I primarily work on music videos, music visualizers as well as photo and
            video coverage of concerts and festivals!"
        />
      </Head>

      <div className={utilStyles.menu2}>
        <div className={utilStyles.menu5}>About Me</div>
        <div className={utilStyles.menu3}>
          <Link href="/">Homepage</Link>
          <Link href="contact">Contact</Link>
        </div>
      </div>

      <div className={utilStyles.flex}>
        <div className={utilStyles.imgVer}>
          <img src="https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642401735/FabianLioner_ymp3ed.jpg" />
        </div>
        <div className={utilStyles.prgph}>
          <p className={utilStyles.nameTag}>Fabian Lioner</p>
          <p className={utilStyles.justify}>
            I am a Photographer & 3D Artist who also happens to study Computer
            Science. I primarily work on developing the visual aspect of music,
            in other words: music videos, music visualizers as well as photo &
            video coverage of concerts and festivals!{" "}
          </p>
          <p className={utilStyles.justify}>
            However I also enjoy to partake in portrait and fashion photography,
            product photography and showcases, as well as ads and product
            release campaigns.{" "}
          </p>
          <p>Based in Guadalajara, Mexico. </p>
        </div>
      </div>
      <Socials></Socials>
      <BottomName />
    </Layout>
  );
}

// className={utilStyles.imgVer}
