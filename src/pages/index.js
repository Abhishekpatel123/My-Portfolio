import React, { useEffect } from "react";
import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
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

const socialData = [
  {
    id: 1,
    Icon: GitHubIcon,
    name: "github",
    url: "https://github.com/Abhishekpatel123",
  },
  {
    id: 2,
    Icon: InstagramIcon,
    name: "instagram",
    url: "https://www.instagram.com/abhishekpatel7339/",
  },
  {
    id: 3,
    Icon: TwitterIcon,
    name: "twitter",
    url: "https://twitter.com/ABHISHE65635171",
  },
  {
    id: 4,
    Icon: LinkedInIcon,
    name: "linkedin",
    url: "https://www.linkedin.com/in/abhishekpatel87/",
  },
];

const useStyles = makeStyles((theme) => ({
  sideContainer: {
    position: "fixed",
    top: 0,
    width: "100px",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "end",
    alignItems: "center",
  },
}));

const Portfolio = () => {
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
          {socialData.map(({ url, Icon, id }) => (
            <IconButton
              key={`social-icon${id}`}
              onClick={() => window.open(url)}
              sx={{ width: "50px", height: "50px" }}
              aria-label="delete"
              color="slate"
            >
              <Icon />
            </IconButton>
          ))}
        </Stack>
        <Divider
          sx={{
            background: "rebeccapurple",
            height: "100px",
            width: "1px",
          }}
          color="secondary"
          orientation="column"
        />

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
      <Box
        className={classes.sideContainer}
        sx={{ right: 0, justifyContent: "center !important" }}
      >
        <a
          href="mailto:abhipatel8719@gmail.com"
          style={{ textDecoration: "none " }}
        >
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
        </a>
        {/* <Divider
          sx={{
            background: "red",
            height: "200px",
            width: "1px",
          }}
          orientation="column"
        /> */}
      </Box>
    </div>
  );
};

export default Portfolio;
