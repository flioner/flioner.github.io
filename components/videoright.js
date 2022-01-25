import React from "react";
import utilStyles from "../styles/utils.module.css";
import HoverVideoPlayer from "react-hover-video-player";

const VideoRight = ({ videourl, thumburl, volume, descr }) => {
  return (
    <div className={utilStyles.paddingBoth}>
      <div className={utilStyles.videoContainer}>
        <div className={utilStyles.videoBoxL}>
          <div className={utilStyles.showcaseTxt}>{descr}</div>
        </div>

        <HoverVideoPlayer
          className={utilStyles.videoContR}
          videoSrc={videourl}
          loop={true}
          muted={false}
          volume={volume}
          pausedOverlay={
            <img
              src={thumburl}
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
  );
};

export default VideoRight;
