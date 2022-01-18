import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/layout'
import React from 'react'
import ReactPlayer from 'react-player'
import utilStyles from '../styles/utils.module.css'



export default function FirstPost() {
    return (
      <Layout blackbg >
          
        <Head >
          <title>Fabian Lioner - About Me</title>
        </Head>

        <div className={utilStyles.menu2}>
        <div className={utilStyles.menu4}>
        About Me
        </div>
        <div className={utilStyles.menu3}>
          <Link href="/">Homepage</Link>
          <Link href="contact">Contact</Link>
        </div>
        </div>

        <div>
        <img 
        src="https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642401735/FabianLioner_ymp3ed.jpg"
        height={550}
        className={utilStyles.paddingTop}
        />




        </div>

      </Layout>
    )
  }

//<video controls src="/aftermovie.mp4" type="video/mp4"></video>

{/* <ReactPlayer
url={"https://youtu.be/rp-HXw-t3SE"}
width="100%"
height="100%"
controls
playsinline
volume={1}
/> */}