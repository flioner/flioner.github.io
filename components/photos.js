import Link from "next/link";
import React, { useState } from "react";
import utilStyles from "../styles/utils.module.css";

const Photos = ({ photoTall, photoWide, url, description }) => {
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

        <div // First Image Container, Wider than Tall (6 to 4)
          //change from div to link and add href="" to make image clickable
          className={
            isShown ? utilStyles.portrait6to4_2 : utilStyles.portrait6to4
          }
        >
          <img /*Fist Image*/ src={photoTall} />
        </div>

        <div // Second Image Container, Taller than Wide (4 to 6)
          //change to link and add href="" to make image clickable
          className={
            isShown ? utilStyles.portrait4to6_2 : utilStyles.portrait4to6
          }
        >
          <img /*Second Image*/ src={photoWide} />
        </div>
      </div>
    </div>
  );
};

export default Photos;
