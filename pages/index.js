import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import React, { useEffect, useState } from "react";
import Video from "../components/video";
import Photos from "../components/photos";
import PhotosEquals from "../components/photos2";
import Socials from "../components/socials";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div className={utilStyles.paddingBottom}>
        <Video
          videourl="https://res.cloudinary.com/ds5o5hlrl/video/upload/v1643098478/3D_Music_Visualizer_Ico_Heal_FH_v1mmgb.mp4"
          thumburl="https://res.cloudinary.com/dgb1oqgt3/image/upload/v1643097443/3D%20Thumbnails/3D_Vis_Thumb_00244_hlxq2h.jpg"
          pagelink="/work/Music-Visualizers-And-3D-Work"
          descr="Music Visualizers And 3D Work"
        />
      </div>

      <div className={utilStyles.paddingBottom}>
        <Video
          videourl="https://res.cloudinary.com/ds5o5hlrl/video/upload/v1642415771/Brunch_OFF_Studios_Aftermovie_dxqklb.mp4"
          thumburl="https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642823570/Live%20Thumbs/Brunch_Off_Studios_Aftermovie_glviut.jpg"
          pagelink="/work/Live-Music-Video-Coverage"
          descr="Live Music Video Coverage"
        />
      </div>

      <PhotosEquals
        photo1="https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642826512/Concert%20Photography/B_W1-min_vhfjb3.jpg"
        photo2="https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642826512/Concert%20Photography/B_W2-min_fgskmb.jpg"
        photo3="https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642826522/Concert%20Photography/b_w4-min_nxhx9q.jpg"
        description="Concert Photography"
        url="/work/Concert-Photography"
      ></PhotosEquals>

      <Photos
        photoTall="https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642326044/Portrait%20and%20Fashion%20Photography/moda_3_l1uu2v.jpg"
        photoWide="https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642378891/Portrait%20and%20Fashion%20Photography/Moda_1_wyt57z.jpg"
        description="Portrait & Fashion Photography"
        url="/work/Portrait-And-Fashion-Photography"
      ></Photos>

      <Socials />
    </Layout>
  );
}

/*
      <div className={utilStyles.player}>
        <div className={utilStyles.videoMenu}>
          <Link href="/work/Music-Visualizers-And-3D-Work">
            Music Visualizers And 3D Work
          </Link>
        </div>
        <HoverVideoPlayer
          videoSrc="https://res.cloudinary.com/ds5o5hlrl/video/upload/v1642414331/3D_Music_Visualizer_ibmnba.mp4"
          loop={true}
          muted={true}
          volume={0.2}
          pausedOverlay={
            <img
              src="https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642468821/3D_Visualizer_Thumb_hehg2a.jpg"
              style={{ width: "100.2%", height: "100.5%", objectFit: "cover" }}
            />
          }
        />
      </div> */

/*           <a
            href="/work/Portrait-And-Fashion-Photography"
            className={utilStyles.portrait6to4}
          >
            <img src="https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642326044/moda_3_l1uu2v.jpg" />
          </a>

          <a
            href="/work/Portrait-And-Fashion-Photography"
            className={utilStyles.portrait4to6}
          >
            <img src="https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642378891/Moda_1_wyt57z.jpg" />
          </a> */
