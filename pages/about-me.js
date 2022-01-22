import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";
import React from "react";
import ReactPlayer from "react-player";
import utilStyles from "../styles/utils.module.css";

export default function FirstPost() {
  return (
    <Layout blackbg>
      <Head>
        <title>Fabian Lioner - About Me</title>
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

      <div className={utilStyles.socials}>
        <a href="https://www.youtube.com/c/LNRMusicCuration/">
          <img
            className={utilStyles.yt}
            src="https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642803411/youtube-1324440259449547121_512_z9ncgg.png"
          />
        </a>
        <a href="https://www.instagram.com/fabian_lioner/">
          <img
            className={utilStyles.ig}
            src="https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642803411/sc_instagram-131965017549730753_512_nkmd9g.png"
          />
        </a>
        <a href="mailto:lionerrochae@gmail.com">
          <img
            className={utilStyles.gm}
            src="https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642803411/email_gmail_mail_message_service_icon-1320183349928958530_512_agyr2e.png"
          />
        </a>
      </div>
    </Layout>
  );
}

// className={utilStyles.imgVer}
