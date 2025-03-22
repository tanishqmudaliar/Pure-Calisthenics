"use client";
import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Phone from "@mui/icons-material/Phone";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    white: {
      main: "#ffffff",
    },
  },
});

const Footer = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="bg-secondary w-3/4 h-fit flex py-5 justify-center items-center">
        <div className="w-full max-w-96 flex justify-evenly items-center">
          <Tooltip title="Instagram">
            <IconButton
              target="_blank"
              href="https://www.instagram.com/pure__calisthenics"
              className="w-fit mt-1.5"
              color="white"
            >
              <InstagramIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Youtube">
            <IconButton
              target="_blank"
              href="https://www.youtube.com/channel/UCTa4HXD-6C2j4ROP1Vq0B3g"
              className="w-fit mt-1.5"
              color="white"
            >
              <YouTubeIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Call Us">
            <IconButton
              target="_blank"
              href="tel:+919773968119"
              className="w-fit mt-1.5"
              color="white"
            >
              <Phone />
            </IconButton>
          </Tooltip>
          <Tooltip title="Location">
            <IconButton
              target="_blank"
              href="https://maps.app.goo.gl/zmLdBUQ7aXXEuuae8"
              className="w-fit mt-1.5"
              color="white"
            >
              <LocationOnIcon />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Footer;
