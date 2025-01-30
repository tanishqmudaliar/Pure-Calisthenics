"use client";
import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import Phone from "@mui/icons-material/Phone";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    ochre: {
      main: "#ffffff",
    },
  },
});

const Footer = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="bg-secondary w-full h-fit flex py-5 justify-center items-center">
        <div className="w-full max-w-96 flex justify-evenly items-center">
          <Tooltip title="Facebook">
            <IconButton
              target="_blank"
              href="https://www.facebook.com"
              className="w-fit mt-1.5"
              color="ochre"
            >
              <FacebookIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Instagram">
            <IconButton
              target="_blank"
              href="https://www.instagram.com"
              className="w-fit mt-1.5"
              color="ochre"
            >
              <InstagramIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Youtube">
            <IconButton
              target="_blank"
              href="https://www.youtube.com"
              className="w-fit mt-1.5"
              color="ochre"
            >
              <YouTubeIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Twitter">
            <IconButton
              target="_blank"
              href="https://twitter.com"
              className="w-fit mt-1.5"
              color="ochre"
            >
              <TwitterIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Call Us">
            <IconButton
              target="_blank"
              href="tel:+919773968119"
              className="w-fit mt-1.5"
              color="ochre"
            >
              <Phone />
            </IconButton>
          </Tooltip>
          <Tooltip title="Location">
            <IconButton
              target="_blank"
              href="https://maps.app.goo.gl/zmLdBUQ7aXXEuuae8"
              className="w-fit mt-1.5"
              color="ochre"
            >
              <AccountBalanceRoundedIcon />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Footer;
