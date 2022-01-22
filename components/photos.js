import Link from "next/link";
import React, { useState } from "react";
import utilStyles from "../styles/utils.module.css";

const Photos = () => {
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
          <Link href="/work/Portrait-And-Fashion-Photography">
            Portrait & Fashion Photography
          </Link>
        </div>
        <a
          href="/work/Portrait-And-Fashion-Photography"
          className={
            isShown ? utilStyles.portrait6to4_2 : utilStyles.portrait6to4
          }
        >
          <img src="https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642326044/Portrait%20and%20Fashion%20Photography/moda_3_l1uu2v.jpg" />
        </a>

        <a
          href="/work/Portrait-And-Fashion-Photography"
          className={
            isShown ? utilStyles.portrait4to6_2 : utilStyles.portrait4to6
          }
        >
          <img src="https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642378891/Portrait%20and%20Fashion%20Photography/Moda_1_wyt57z.jpg" />
        </a>
      </div>
    </div>
  );
};

export default Photos;
