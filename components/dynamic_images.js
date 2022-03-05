import { useState } from "react";
import utilStyles from "../styles/utils.module.css";

/*COLLAGE WITH ALL TALL IMAGES AND BIGGEST TO THE RIGHT */
const CollageAllTallBigRight = ({ imgTop, imgBot, imgRight }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [img, setImg] = useState(imgRight);

  return (
    <div>
      <div className={utilStyles.fitScreen4}>
        <img
          className={isVisible ? utilStyles.modal : utilStyles.modal2}
          src={img}
        />

        <img
          className={isVisible ? utilStyles.modal3 : utilStyles.modal4}
          src={img}
          onClick={() => setIsVisible(false)}
        />
      </div>

      <div
        className={
          isVisible
            ? utilStyles.collage_Big_Tall_Right_Container2_2
            : utilStyles.collage_Big_Tall_Right_Container2
        }
        /* FIRST CONTAINER*/
      >
        <img
          className={utilStyles.small_tall_top_left}
          src={imgTop}
          onMouseEnter={() => setImg(imgTop)}
          onClick={() => setIsVisible(true)}
        />
        <img
          className={utilStyles.small_tall_bottom_left}
          src={imgBot}
          onMouseEnter={() => setImg(imgBot)}
          onClick={() => setIsVisible(true)}
        />
        <img
          className={utilStyles.big_tall_right}
          src={imgRight}
          onMouseEnter={() => setImg(imgRight)}
          onClick={() => setIsVisible(true)}
        />
      </div>
    </div>
  );
};

export { CollageAllTallBigRight };
/* END OF COLLAGE WITH ALL TALL IMAGES AND BIGGEST TO THE RIGHT */

/* COLLAGE WITH ALL TALL IMAGES AND BIGGEST TO THE LEFT */
const CollageAllTallBigLeft = ({ imgTop, imgBot, imgLeft }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [img, setImg] = useState(imgLeft);

  return (
    <div>
      <div className={utilStyles.fitScreen4}>
        <img
          className={isVisible ? utilStyles.modal : utilStyles.modal2}
          src={img}
        />

        <img
          className={isVisible ? utilStyles.modal3 : utilStyles.modal2}
          src={img}
          onClick={() => setIsVisible(false)}
        />
      </div>

      <div
        className={
          utilStyles.collage_Big_Tall_Left_Container2
        } /* SECOND CONTAINER*/
      >
        <img
          className={utilStyles.big_tall_left}
          src={imgLeft}
          onMouseEnter={() => setImg(imgLeft)}
          onClick={() => setIsVisible(true)}
        />
        <img
          className={utilStyles.small_tall_top_right2}
          src={imgTop}
          onMouseEnter={() => setImg(imgTop)}
          onClick={() => setIsVisible(true)}
        />
        <img
          className={utilStyles.small_tall_bottom_right}
          src={imgBot}
          onMouseEnter={() => setImg(imgBot)}
          onClick={() => setIsVisible(true)}
        />
      </div>
    </div>
  );
};

export { CollageAllTallBigLeft };
/* END OF COLLAGE WITH ALL TALL IMAGES AND BIGGEST TO THE LEFT */

/*  COLLAGE WITH UNEVEN IMAGES AND BIGGEST TO THE LEFT */
const CollageBigTallLeftUneven = ({ imgTop, imgBot, imgLeft }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [img, setImg] = useState(imgLeft);

  return (
    <div>
      <div className={utilStyles.fitScreen4}>
        <img
          className={isVisible ? utilStyles.modal : utilStyles.modal2}
          src={img}
        />

        <img
          className={isVisible ? utilStyles.modal3 : utilStyles.modal2}
          src={img}
          onClick={() => setIsVisible(false)}
        />
      </div>
      <div className={utilStyles.collage_Big_Tall_Left_Container}>
        <img
          className={utilStyles.big_tall_left}
          src={imgLeft}
          onMouseEnter={() => setImg(imgLeft)}
          onClick={() => setIsVisible(true)}
        />
        <img
          className={utilStyles.small_tall_top_right}
          src={imgTop}
          onMouseEnter={() => setImg(imgTop)}
          onClick={() => setIsVisible(true)}
        />
        <img
          className={utilStyles.small_wide_bottom_right}
          src={imgBot}
          onMouseEnter={() => setImg(imgBot)}
          onClick={() => setIsVisible(true)}
        />
      </div>
    </div>
  );
};

export { CollageBigTallLeftUneven };
/* END OF COLLAGE WITH UNEVEN IMAGES AND BIGGEST TO THE LEFT */

/*  2 IMAGE COLLAGE */
const TwoImageCollageTallLeft = ({ imgLeft, imgRight }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [img, setImg] = useState(
    "https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642826507/Concert%20Photography/_MG_4270-min_vfepya.jpg"
  );

  return (
    <div>
      <div className={utilStyles.fitScreen4}>
        <img
          className={isVisible ? utilStyles.modal : utilStyles.modal2}
          src={img}
        />

        <img
          className={isVisible ? utilStyles.modal3 : utilStyles.modal2}
          src={img}
          onClick={() => setIsVisible(false)}
        />
      </div>
      <div className={utilStyles.ImgFlexContainer}>
        <div className={utilStyles.portrait4to6_2_2}>
          <img
            className={utilStyles.portraitCorners}
            src={imgLeft}
            onMouseEnter={() => setImg(imgLeft)}
            onClick={() => setIsVisible(true)}
          />
        </div>
        <img
          className={utilStyles.portrait6to4}
          src={imgRight}
          onMouseEnter={() => setImg(imgRight)}
          onClick={() => setIsVisible(true)}
        />
      </div>
    </div>
  );
};

export { TwoImageCollageTallLeft };
/* END OF 2 IMAGE COLLAGE */
