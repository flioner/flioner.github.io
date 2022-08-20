import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const NavBar = ({
  btn1,
  btn2,
  btn3,
  url2,
  url3,
  drop1,
  drop2,
  drop3,
  drop4,
  drop5,
  dropurl1,
  dropurl2,
  dropurl3,
  dropurl4,
  dropurl5,
}) => {
  return (
    <nav className={utilStyles.menu}>
      <div className={utilStyles.dropdown}>
        <button className={utilStyles.dropbtn}>{btn1}</button>
        <div className={utilStyles.dropdowncontent}>
          <Link href={dropurl1}>{drop1}</Link>
          <Link href={dropurl2}>{drop2}</Link>
          <Link href={dropurl3}>{drop3}</Link>
          <Link href={dropurl4}>{drop4}</Link>
          <Link href={dropurl5}>{drop5}</Link>
        </div>
      </div>
      <div className={utilStyles.dropdown}>
        <button className={utilStyles.dropbtn}>
          <Link href={url2}>{btn2}</Link>
        </button>
      </div>
      <div className={utilStyles.dropdown}>
        <button className={utilStyles.dropbtn}>
          <Link href={url3}>{btn3}</Link>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
