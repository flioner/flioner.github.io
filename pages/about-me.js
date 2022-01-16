import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/layout'
import React from 'react'
import ReactPlayer from 'react-player'



export default function FirstPost() {
    return (
      <Layout blackbg >
          
        <Head >
          <title>Uwuntu</title>
        </Head>

        <h1>First Post</h1>
        

        
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </Layout>
    )
  }

//<video controls src="/aftermovie.mp4" type="video/mp4"></video>

{/* <ReactPlayer
url={"/aftermovie.mp4"}
width="100%"
height="100%"
controls
playsinline
volume={1}
/> */}