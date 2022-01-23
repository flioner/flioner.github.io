import { useState } from "react";
import { useVolume } from "../lib/VolumeContext";
import utilStyles from "../styles/utils.module.css";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const VolumeSlider = () => {
  const [isActive, setActive] = useState(false);
  const handleToggle = () => {
    setActive(!isActive);
  };
  const handleToggleOn = () => {
    setActive(true);
  };
  const handleToggleOff = () => {
    setActive(false);
  };

  const { volume, setVolume } = useVolume();
  const handleChange = (e, newValue) => {
    setVolume(newValue / 100);
  };

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

  return (
    <div
      onMouseEnter={handleToggleOn}
      onMouseLeave={handleToggleOff}
      className={utilStyles.floating}
    >
      <div className={utilStyles.dropdown2}>
        <button //onClick={handleToggle}
          className={utilStyles.dropbtn2}
        >
          <img
            className={isActive ? utilStyles.icon2 : utilStyles.icon}
            src="https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642575539/Icons/Volume_Icon_00000_cd3dxz.jpg"
          />
        </button>

        <div
          className={
            isActive ? utilStyles.dropdowncontent3 : utilStyles.dropdowncontent2
          }
        >
          <div className={isActive ? utilStyles.slider2 : utilStyles.slider}>
            <ThemeProvider theme={theme}>
              <Box height={200}>
                <Slider
                  size="small"
                  value={parseInt(volume * 100)}
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
  );
};

export default VolumeSlider;
