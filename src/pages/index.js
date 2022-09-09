import React, { useEffect } from "react";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
} from "@mui/icons-material";

import "./stylesheet.css";
import {
  About,
  Banner,
  Contact,
  Experience,
  Footer,
  Interest,
  Skills,
  Project,
  Status,
} from "components";

const useStyles = makeStyles((theme) => ({
  sideContainer: {
    position: "fixed",
    top: 0,
    width: "100px",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Portfolio2021 = () => {
  const classes = useStyles();
  let data;
  const observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.toggle("data_count_animation");
        observer.unobserve(entry.target);
      });
    },
    { root: null, threshold: 0.1, rootMargin: "0px 0px -200px 0px" }
  );

  useEffect(() => {
    data = document.querySelector(".data_in_number");
    const allContent = document.querySelector(".allContent");
    let allchild = allContent.querySelectorAll(":scope > *");
    allchild.forEach((ele) => observer.observe(ele));
  }, []);

  return (
    <div>
      {/* left FIXED CONTAINER */}
      <Box className={classes.sideContainer} sx={{ left: 0 }}>
        <Stack>
          {[GitHubIcon, InstagramIcon, TwitterIcon, LinkedInIcon].map(
            (Icon, idx) => (
              <IconButton
                sx={{ width: "50px", height: "50px" }}
                aria-label="delete"
                color="slate"
              >
                <Icon />
              </IconButton>
            )
          )}
        </Stack>

        {/* <Divider orientation="vertical" sx={{ color: "white" }} /> */}
      </Box>

      {/* MIDDLE CONTENT CONTAINER */}
      <main style={{ padding: "0 100px" }} className={`allContent container `}>
        <Banner />
        <Status />
        <About />
        <Skills />
        <Interest />
        <Experience />
        <Project />
        <Contact />
        <Footer />
      </main>

      {/* RIGHT FIXED CONTAINER */}
      <Box className={classes.sideContainer} sx={{ right: 0 }}>
        <Typography
          sx={{
            // background: "oldlace",
            transform: "rotate(90deg)",
            letterSpacing: "3px",
            fontFamily: "Roboto Mono",
            cursor: "pointer",
          }}
          color="slate"
        >
          abhipatel8719@gmail.com
        </Typography>
      </Box>
    </div>
  );
};

export default Portfolio2021;
