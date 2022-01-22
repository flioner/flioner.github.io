import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import React, { useState } from "react";
import utilStyles from "../../styles/utils.module.css";
import HoverVideoPlayer from "react-hover-video-player";
import Socials from "../../components/socials";

export default function FirstPost() {
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

      <div className={utilStyles.paddingBoth}>
        <div className={utilStyles.videoContainer}>
          <div className={utilStyles.videoBoxR}>
            <div className={utilStyles.showcaseTxt}>
              3D Modular Music Visualizer
            </div>
          </div>

          <HoverVideoPlayer
            className={utilStyles.videoContL}
            videoSrc="https://res.cloudinary.com/dtnhdghv6/video/upload/v1642810303/3D_Music_Visualizer_2_zvqubj.mp4"
            loop={true}
            muted={true}
            volume={0.2}
            pausedOverlay={
              <img
                src="https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642468821/3D%20Thumbnails/3D_Visualizer_Thumb_hehg2a.jpg"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            }
          />
        </div>
      </div>

      <div className={utilStyles.paddingBoth}>
        <div className={utilStyles.videoContainer}>
          <div className={utilStyles.videoBoxL}>
            <div className={utilStyles.showcaseTxt}>Custom 3D Lyric Video</div>
          </div>
          <HoverVideoPlayer
            className={utilStyles.videoContR}
            videoSrc="https://res.cloudinary.com/dtnhdghv6/video/upload/v1642833897/Marte_Turista_3D_Lyrics_vgbeyw.mp4"
            loop={true}
            muted={true}
            volume={0.2}
            pausedOverlay={
              <img
                src="https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642809482/3D%20Thumbnails/marte_thumb_03102_m6ndkh.jpg"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            }
          />
        </div>
      </div>

      <div className={utilStyles.paddingBoth}>
        <div className={utilStyles.videoContainer}>
          <div className={utilStyles.videoBoxR}>
            <div className={utilStyles.showcaseTxt}>
              2D Modular Music Visualizer
            </div>
          </div>
          <HoverVideoPlayer
            className={utilStyles.videoContL}
            videoSrc="https://res.cloudinary.com/dtnhdghv6/video/upload/v1642808093/Music_Visualizer_gqtfik.mp4"
            loop={true}
            muted={true}
            volume={0.2}
            pausedOverlay={
              <img
                src="https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642809482/3D%20Thumbnails/Music_Visualizer_00523_eaxj0l.jpg"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            }
          />
        </div>
      </div>
      <Socials></Socials>
    </Layout>
  );
}
