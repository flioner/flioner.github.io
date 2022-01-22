import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import React, { useState } from "react";
import HoverVideoPlayer from "react-hover-video-player";
import { useVolume } from "../lib/VolumeContext";

const Video = ({ videourl, thumburl, pagelink, descr }) => {
  const [isShown, setIsShown] = useState(false);
  const { volume, setVolume } = useVolume();

  return (
    <div>
      <HoverVideoPlayer
        videoSrc={videourl}
        loop={true}
        muted={true}
        volume={volume}
        pausedOverlay={
          <img
            src={thumburl}
            style={{ width: "100.2%", height: "100.5%", objectFit: "cover" }}
          />
        }
        hoverOverlay={
          <div className={utilStyles.videoMenu}>
            <Link href={pagelink}>{descr}</Link>
          </div>
        }
      />
    </div>
  );
};

export default Video;
