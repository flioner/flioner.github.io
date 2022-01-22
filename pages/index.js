import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout, { siteTitle } from "../components/layout";
import { value } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import HoverVideoPlayer from "react-hover-video-player";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import Video from "../components/video2";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div className={utilStyles.paddingBottom}>
        <Video
          videourl="https://res.cloudinary.com/ds5o5hlrl/video/upload/v1642414331/3D_Music_Visualizer_ibmnba.mp4"
          thumburl="https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642468821/3D_Visualizer_Thumb_hehg2a.jpg"
          pagelink="/work/Music-Visualizers-And-3D-Work"
          descr="Music Visualizers And 3D Work"
        />{" "}
      </div>

      <div className={utilStyles.paddingBottom}>
        <Video
          className={utilStyles.v720}
          videourl="https://res.cloudinary.com/ds5o5hlrl/video/upload/v1642415771/Brunch_OFF_Studios_Aftermovie_dxqklb.mp4"
          thumburl="https://res.cloudinary.com/ds5o5hlrl/image/upload/v1642470547/Brunch_Off_Studios_Aftermovie_haabuj.jpg"
          pagelink="/work/Live-Music-Video-Coverage"
          descr="Live Music Video Coverage"
        />
      </div>
    </Layout>
  );
}

/*
      <div className={utilStyles.portraitPreviewContainer}>
        <div>
          <img src="https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642378891/Moda_1_wyt57z.jpg" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642326044/moda_3_l1uu2v.jpg" />
        </div>
      </div>
      */

//<img src="https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642298859/cld-sample.jpg" />

/*      <nav className={utilStyles.menu}>
        <Link href="/">Work</Link>
        <Link href="about-me">About Me</Link>
        <Link href="contact">Contact</Link>
      </nav> */

// onMouseEnter={()=>setIsVideoPlaying(true)}
