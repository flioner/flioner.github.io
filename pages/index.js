import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import HoverVideoPlayer from 'react-hover-video-player';
import React, { useEffect, useState } from "react";

export default function Home() {

const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    
    <Layout home>
      
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div className={utilStyles.paddingVideo}>
      <HoverVideoPlayer
        videoSrc="https://res.cloudinary.com/ds5o5hlrl/video/upload/v1642414331/3D_Music_Visualizer_ibmnba.mp4"
        loop={true}
        muted={true}
        volume={0.2}

        pausedOverlay={
          <img
            src="https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642468821/3D_Visualizer_Thumb_hehg2a.jpg"
            style={{width: '100%', height: '100.2%', objectFit: 'cover',}}
          />}

        hoverOverlay={
          <div className={utilStyles.videoMenu}>
            <Link href="work/Music-Visualizers-And-3D-Work">Music Visualizers And 3D Work</Link>
          </div>}
    
      />
      </div>

      <div className={utilStyles.paddingVideo}>
      <HoverVideoPlayer
        videoSrc="https://res.cloudinary.com/ds5o5hlrl/video/upload/v1642415771/Brunch_OFF_Studios_Aftermovie_dxqklb.mp4"
        loop={true}
        muted={true}
        volume={0.2}

        pausedOverlay={
          <img
            src="https://res.cloudinary.com/ds5o5hlrl/image/upload/v1642470547/Brunch_Off_Studios_Aftermovie_haabuj.jpg"
            style={{width: '100%', height: '100.2%', objectFit: 'cover',}}
          />}
        
        hoverOverlay={
          <div className={utilStyles.videoMenu}>
            <Link href="work/Live-Music-Video-Coverage">Live Music Video Coverage</Link>
          </div>}

      />
      </div>

    </Layout>
  )
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

/* className={utilStyles.menu} */



/*       <ReactPlayer 
      url='https://res.cloudinary.com/ds5o5hlrl/video/upload/v1642414331/3D_Music_Visualizer_ibmnba.mp4'
      light="https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642467240/3DThumb_bcqcmo.jpg"
      poster      
      playing
      width={"100%"}
      height={"100%"}
      controls={true}
      /> */

// onMouseEnter={()=>setIsVideoPlaying(true)}