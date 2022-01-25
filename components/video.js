import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import React, { useState } from "react";
import HoverVideoPlayer from "react-hover-video-player";
import { useVolume } from "../lib/VolumeContext";

const Video = ({ videourl, thumburl, pagelink, descr }) => {
  const [isShown, setIsShown] = useState(false);
  const { volume } = useVolume();

  return (
    <div
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <div className={utilStyles.videoContainer}>
        <div className={isShown ? utilStyles.videoMenu : utilStyles.videoMenu2}>
          <Link href={pagelink}>{descr}</Link>
        </div>

        <HoverVideoPlayer
          className={utilStyles.videoCont}
          videoSrc={videourl}
          loop={true}
          muted={false}
          volume={volume}
          pausedOverlay={
            <img
              src={thumburl}
              style={{
                width: "100.2%",
                height: "100.5%",
                objectFit: "cover",
              }}
            />
          }
        />
      </div>
    </div>
  );
};

export default Video;

/*
          hoverOverlay={
            <div className={utilStyles.videoMenu}>
              <Link href={pagelink}>{descr}</Link>
            </div>
          } */
