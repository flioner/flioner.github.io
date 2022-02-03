import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import React from "react";
import utilStyles from "../../styles/utils.module.css";
import Socials from "../../components/socials";
import { useVolume } from "../../lib/VolumeContext";
import VideoRight from "../../components/videoright";
import VideoLeft from "../../components/videoleft";

export default function FirstPost() {
  const { volume } = useVolume();
  return (
    <Layout blackbg>
      <Head>
        <title>Live Music Video Coverage</title>
      </Head>

      <div className={utilStyles.menu2}>
        <div className={utilStyles.menu4}>Live Music Video Coverage</div>
        <div className={utilStyles.menu3}>
          <Link href="/">Homepage</Link>
          <Link href="../about-me">About Me</Link>
          <Link href="../contact">Contact</Link>
        </div>
      </div>

      <VideoRight
        videourl="https://res.cloudinary.com/ds5o5hlrl/video/upload/v1642415771/Brunch_OFF_Studios_Aftermovie_dxqklb.mp4"
        thumburl="https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642823570/Live%20Thumbs/Brunch_Off_Studios_Aftermovie_glviut.jpg"
        descr="Brunch Off Studios Aftermovie"
        volume={volume}
      ></VideoRight>

      <VideoLeft
        videourl="https://res.cloudinary.com/dtnhdghv6/video/upload/v1642816910/Marte_Eternos_Premiere_Aftermovie_jkksew.mp4"
        thumburl="https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642817223/Live%20Thumbs/Marte_Aftermovie_Thumb_00066_zw7zgx.jpg"
        descr="Marte Eternos Premiere Aftermovie"
        volume={volume}
      ></VideoLeft>

      <VideoRight
        videourl="https://res.cloudinary.com/dtnhdghv6/video/upload/v1642817418/Tercer_A%C3%B1o_Festival_Official_Aftermovie_fswyvk.mp4"
        thumburl="https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642817460/Live%20Thumbs/Tercer_Festival_Aftermovie_00532_cus3ns.jpg"
        descr="Tercer Año Festival Aftermovie"
        volume={volume}
      ></VideoRight>

      <VideoLeft
        videourl="https://res.cloudinary.com/dtnhdghv6/video/upload/v1642817731/Sofish_Corazonada_Aftermovie_sdoh1i.mp4"
        thumburl="https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642817869/Live%20Thumbs/Sofish_Corazonada_Thumb_00758_gwfrdg.jpg"
        descr="Sofish Corazonada Aftermovie"
        volume={volume}
      ></VideoLeft>

      <Socials />
    </Layout>
  );
}
