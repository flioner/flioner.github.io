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
        <a
          href={url}
          className={
            isShown ? utilStyles.portraitEquals : utilStyles.portraitEquals2
          }
        >
          <img src={photo1} />
        </a>

        <a
          href={url}
          className={
            isShown ? utilStyles.portraitEqualsC : utilStyles.portraitEqualsC2
          }
        >
          <img src={photo2} />
        </a>
        <a
          href={url}
          className={
            isShown ? utilStyles.portraitEquals : utilStyles.portraitEquals2
          }
        >
          <img src={photo3} />
        </a>
      </div>
    </div>
  );
};

export default PhotosEquals;
