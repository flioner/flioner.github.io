import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import React, { useState } from "react";
import utilStyles from "../../styles/utils.module.css";
import Socials from "../../components/socials";
import { useVolume } from "../../lib/VolumeContext";
import VideoLeft from "../../components/videoleft";
import VideoRight from "../../components/videoright";

export default function FirstPost() {
  const { volume } = useVolume();

  console.log("music-visualizers", volume);

  return (
    <Layout blackbg>
      <Head>
        <title>Music Visualizers And 3D Work</title>
      </Head>

      <div className={utilStyles.menu2}>
        <div className={utilStyles.menu4}>Music Visualizers And 3D Work</div>
        <div className={utilStyles.menu3}>
          <Link href="/">Homepage</Link>
          <Link href="../about-me">About Me</Link>
          <Link href="../contact">Contact</Link>
        </div>
      </div>

      <VideoLeft
        videourl="https://res.cloudinary.com/dtnhdghv6/video/upload/v1642810303/3D_Music_Visualizer_2_zvqubj.mp4"
        thumburl="https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642468821/3D%20Thumbnails/3D_Visualizer_Thumb_hehg2a.jpg"
        descr="3D Modular Music Visualizer"
        volume={volume}
      ></VideoLeft>

      <VideoRight
        videourl="https://res.cloudinary.com/dtnhdghv6/video/upload/v1642833897/Marte_Turista_3D_Lyrics_vgbeyw.mp4"
        thumburl="https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642809482/3D%20Thumbnails/marte_thumb_03102_m6ndkh.jpg"
        descr="Custom 3D Lyric Video"
        volume={volume}
      ></VideoRight>

      <VideoLeft
        videourl="https://res.cloudinary.com/dtnhdghv6/video/upload/v1642808093/Music_Visualizer_gqtfik.mp4"
        thumburl="https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642809482/3D%20Thumbnails/Music_Visualizer_00523_eaxj0l.jpg"
        descr="2D Modular Music Visualizer"
        volume={volume}
      ></VideoLeft>

      <Socials />
    </Layout>
  );
}
