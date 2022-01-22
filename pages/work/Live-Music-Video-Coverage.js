import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import React from "react";
import utilStyles from "../../styles/utils.module.css";
import HoverVideoPlayer from "react-hover-video-player";
import Socials from "../../components/socials";

export default function FirstPost() {
  return (
    <Layout blackbg>
      <Head>
        <title>Live Music Video Coverage</title>
      </Head>

      <div className={utilStyles.menu2}>
        <div className={utilStyles.menu4}>Live Music Video Coverage</div>
        <div className={utilStyles.menu3}>
          <Link href="/">Homepage</Link>
          <Link href="about-me">About Me</Link>
          <Link href="contact">Contact</Link>
        </div>
      </div>

      <div className={utilStyles.paddingBoth}>
        <div className={utilStyles.videoContainer}>
          <div className={utilStyles.videoBoxL}>
            <div className={utilStyles.showcaseTxt}>
              Brunch Off Studios Aftermovie
            </div>
          </div>

          <HoverVideoPlayer
            className={utilStyles.videoContR}
            videoSrc="https://res.cloudinary.com/ds5o5hlrl/video/upload/v1642415771/Brunch_OFF_Studios_Aftermovie_dxqklb.mp4"
            loop={true}
            muted={true}
            volume={0.2}
            pausedOverlay={
              <img
                src="https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642823570/Live%20Thumbs/Brunch_Off_Studios_Aftermovie_glviut.jpg"
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
              Marte Eternos Premiere Aftermovie
            </div>
          </div>

          <HoverVideoPlayer
            className={utilStyles.videoContL}
            videoSrc="https://res.cloudinary.com/dtnhdghv6/video/upload/v1642816910/Marte_Eternos_Premiere_Aftermovie_jkksew.mp4"
            loop={true}
            muted={true}
            volume={0.2}
            pausedOverlay={
              <img
                src="https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642817223/Live%20Thumbs/Marte_Aftermovie_Thumb_00066_zw7zgx.jpg"
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
            <div className={utilStyles.showcaseTxt}>
              Tercer Año Festival Aftermovie
            </div>
          </div>

          <HoverVideoPlayer
            className={utilStyles.videoContR}
            videoSrc="https://res.cloudinary.com/dtnhdghv6/video/upload/v1642817418/Tercer_A%C3%B1o_Festival_Official_Aftermovie_fswyvk.mp4"
            loop={true}
            muted={true}
            volume={0.2}
            pausedOverlay={
              <img
                src="https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642817460/Live%20Thumbs/Tercer_Festival_Aftermovie_00532_cus3ns.jpg"
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
              Sofish Corazonada Aftermovie
            </div>
          </div>

          <HoverVideoPlayer
            className={utilStyles.videoContL}
            videoSrc="https://res.cloudinary.com/dtnhdghv6/video/upload/v1642817731/Sofish_Corazonada_Aftermovie_sdoh1i.mp4"
            loop={true}
            muted={true}
            volume={0.2}
            pausedOverlay={
              <img
                src="https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642817869/Live%20Thumbs/Sofish_Corazonada_Thumb_00758_gwfrdg.jpg"
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
