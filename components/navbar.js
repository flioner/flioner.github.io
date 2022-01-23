import utilStyles from "../styles/utils.module.css";

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
  dropurl1,
  dropurl2,
  dropurl3,
  dropurl4,
}) => {
  return (
    <nav className={utilStyles.menu}>
      <div className={utilStyles.dropdown}>
        <button className={utilStyles.dropbtn}>{btn1}</button>
        <div className={utilStyles.dropdowncontent}>
          <a href={dropurl1}>{drop1}</a>
          <a href={dropurl2}>{drop2}</a>
          <a href={dropurl3}>{drop3}</a>
          <a href={dropurl4}>{drop4}</a>
        </div>
      </div>
      <div className={utilStyles.dropdown}>
        <button className={utilStyles.dropbtn}>
          <a href={url2}>{btn2}</a>
        </button>
      </div>
      <div className={utilStyles.dropdown}>
        <button className={utilStyles.dropbtn}>
          <a href={url3}>{btn3}</a>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
