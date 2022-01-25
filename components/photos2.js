import Link from "next/link";
import React, { useState } from "react";
import utilStyles from "../styles/utils.module.css";

const PhotosEquals = ({ photo1, photo2, photo3, url, description }) => {
  const [isShown, setIsShown] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      className={utilStyles.contContainer}
    >
      <div className={utilStyles.portraitContainer}>
        <div
          className={
            isShown ? utilStyles.portraitMenu : utilStyles.portraitMenu2
          }
        >
          <Link href={url}>{description}</Link>
        </div>

        <div // First Image Container
          //change to link and add href="" to make image clickable
          className={
            isShown ? utilStyles.portraitEquals : utilStyles.portraitEquals2
          }
        >
          <img /*Fist Image*/ src={photo1} />
        </div>

        <div // Second Image Container
          //change to link and add href="" to make image clickable
          className={
            isShown ? utilStyles.portraitEqualsC : utilStyles.portraitEqualsC2
          }
        >
          <img /*Second Image*/ src={photo2} />
        </div>

        <div // Third Image Container
          //change to link and add href="" to make image clickable
          className={
            isShown ? utilStyles.portraitEquals : utilStyles.portraitEquals2
          }
        >
          <img /*Third Image*/ src={photo3} />
        </div>
      </div>
    </div>
  );
};

export default PhotosEquals;
