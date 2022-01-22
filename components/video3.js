import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import React, { useState } from "react";
import HoverVideoPlayer from "react-hover-video-player";

const Video2 = ({ videourl, thumburl }) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div>
      <HoverVideoPlayer
        videoSrc={videourl}
        loop={true}
        muted={true}
        volume={0.2}
        pausedOverlay={
          <img
            src={thumburl}
            style={{ width: "100.2%", height: "100.5%", objectFit: "cover" }}
          />
        }
      />
    </div>
  );
};

export default Video2;
