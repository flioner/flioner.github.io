import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import React from "react";

const name = "Fabian Lioner";
export const siteTitle = "Fabian Lioner";

const theme = createTheme({
  status: {
    danger: "#494949",
  },
  palette: {
    primary: {
      main: "#494949",
      darker: "#494949",
    },
    neutral: {
      main: "#494949",
      contrastText: "#494949",
    },
  },
});

export default function Layout({ children, home }) {
  const [isActive, setActive] = useState(false);
  const handleToggle = () => {
    setActive(!isActive);
  };

  const [value, setValue] = React.useState(30);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
      </Head>

      {home && (
        <>
          <header className={styles.header}>
            <h1 className={utilStyles.headingLg}>{name}</h1>
          </header>
          <nav className={utilStyles.menu}>
            <div className={utilStyles.dropdown}>
              <button className={utilStyles.dropbtn}>Work</button>
              <div className={utilStyles.dropdowncontent}>
                <a href="/work/Music-Visualizers-And-3D-Work">
                  Music Visualizers And 3D Work
                </a>
                <a href="/work/Live-Music-Video-Coverage">
                  Live Music Video Coverage
                </a>
                <a href="/work/Concert-Photography">Concert Photography</a>
                <a href="/work/Portrait-And-Fashion-Photography">
                  Portrait & Fashion Photography
                </a>
              </div>
            </div>
            <div className={utilStyles.dropdown}>
              <button className={utilStyles.dropbtn}>
                <a href="about-me">About Me</a>
              </button>
            </div>
            <div className={utilStyles.dropdown}>
              <button className={utilStyles.dropbtn}>
                <a href="contact">Contact</a>
              </button>
            </div>
          </nav>
          <div className={utilStyles.floating}>
            <div className={utilStyles.dropdown2}>
              <button onClick={handleToggle} className={utilStyles.dropbtn2}>
                <img
                  className={utilStyles.icon}
                  src=" https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642575539/Volume_Icon_00000_cd3dxz.jpg"
                />
              </button>

              <div
                className={
                  isActive
                    ? utilStyles.dropdowncontent3
                    : utilStyles.dropdowncontent2
                }
              >
                <div>
                  <ThemeProvider theme={theme}>
                    <Box height={200}>
                      <Slider
                        size="small"
                        value={value}
                        onChange={handleChange}
                        aria-label="Small"
                        valueLabelDisplay="auto"
                        orientation="vertical"
                        color="neutral"
                      />
                    </Box>
                  </ThemeProvider>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <main>{children}</main>
      {!home && <></>}
    </div>
  );
}

/*                <ThemeProvider theme={theme}>
                  <Box height={200}>
                    <Slider
                      size="small"
                      defaultValue={70}
                      aria-label="Small"
                      valueLabelDisplay="auto"
                      orientation="vertical"
                      color="neutral"
                    />
                  </Box>
                </ThemeProvider>*/
