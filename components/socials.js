import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const Socials = () => {
  return (
    <div className={utilStyles.socials}>
      <a href="https://www.youtube.com/c/LNRMusicCuration/">
        <img
          className={utilStyles.yt}
          src="https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642803411/Icons/youtube-1324440259449547121_512_z9ncgg.png"
        />
      </a>
      <a href="https://www.instagram.com/fabian_lioner/">
        <img
          className={utilStyles.ig}
          src="https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642803411/Icons/sc_instagram-131965017549730753_512_nkmd9g.png"
        />
      </a>
      <a href="mailto:lionerrochae@gmail.com">
        <img
          className={utilStyles.gm}
          src="https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642803411/Icons/email_gmail_mail_message_service_icon-1320183349928958530_512_agyr2e.png"
        />
      </a>
    </div>
  );
};

export { Socials };

const BottomName = () => {
  return (
    <div className={utilStyles.fitScreen4}>
      <Link className={utilStyles.bottomButton} href="/">
        <div className={utilStyles.bottomButtonCont}>Fabian Lioner - 2022</div>
      </Link>
    </div>
  );
};

export { BottomName };

const BottomNameIndex = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };
  return (
    <div className={utilStyles.fitScreen4}>
      <div className={utilStyles.bottomButtonCont} onClick={scrollToTop}>
        Fabian Lioner - 2022
      </div>
    </div>
  );
};

export { BottomNameIndex };
