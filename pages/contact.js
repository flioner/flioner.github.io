import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/layout'
import React from 'react'
import ReactPlayer from 'react-player'


export default function FirstPost() {
    return (
      <Layout>
          
        <Head>
          <title>Uwuntu</title>
        </Head>

        <h1>First Post</h1>

      <ReactPlayer url='https://youtu.be/dQw4w9WgXcQ' />

      <h3>
          <Link href="/">
            <a>Back to home</a>
          </Link>
      </h3>
  
      </Layout>
    )
  }
