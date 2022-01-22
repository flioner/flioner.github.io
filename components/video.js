import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import React, { useState } from "react";
import ReactPlayer from "react-player";

const Video = ({ videourl, thumburl, pagelink, descr }) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div
      className={utilStyles.player}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <img
        className={isShown ? utilStyles.thumb2 : utilStyles.thumb}
        src={thumburl}
        width="100%"
        height="110%"
      />
      <div className={isShown ? utilStyles.playercont2 : utilStyles.playercont}>
        <div className={utilStyles.videoMenu}>
          <Link href={pagelink}>{descr}</Link>
        </div>

        <ReactPlayer
          width="100%"
          height="100%"
          url={videourl}
          volume={0}
          playing={isShown}
        />
      </div>
    </div>
  );
};

export default Video;
