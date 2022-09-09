import React, { useEffect } from "react";
import Heading from "utils/Heading/Heading";
import "./About.css";
import MYImage from "assets/images/abhishek.jpeg";
import staticData from "data/staticData";
import { Zoom } from "react-reveal";
import { Box, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import EjectIcon from "@mui/icons-material/Eject";

const About = () => {
  const theme = useTheme();
  // useEffect(() => {
  //   let about_perspective = document.querySelector(".about_perspective");
  //   let about_content = document.querySelector(".about_content");

  //   about_content.addEventListener("mousemove", (e) => {
  //     let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  //     let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  //     about_content.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  //   });
  //   let [h1, p] = document.querySelector(".right").childNodes;
  //   let [image] = document.querySelector(".left").childNodes;
  //   about_content.addEventListener("mouseenter", (e) => {
  //     h1.style.transform = "translateZ(150px)";
  //     p.style.transform = "translateZ(150px)";
  //     image.style.transform = "translateZ(150px)";
  //   });
  //   // animated out
  //   about_content.addEventListener("mouseleave", (e) => {
  //     about_content.style.transform = `rotateY(0) rotateX(0)`;
  //     h1.style.transform = "translateZ(0px)";
  //     p.style.transform = "translateZ(0px)";
  //   });
  // }, []);

  return (
    <div name="about" className="about container">
      <Heading questionNo="1" heading={staticData.about.heading} />
      <Zoom>
        <div className="about_perspective ">
          <div className=" about_content">
            <div className="left">
              <img src={MYImage} alt="my photo" />
            </div>
            <div className="right">
              {/* <h1>{staticData.about.title}</h1> */}
              {/* <p>{staticData.about.description}</p> */}
              <Typography
                variant="subtitle2"
                // component="p"
                sx={{ color: theme.palette.slate.light }}
              >
                Hello! My name is Abhishek Patel and I enjoy creating things
                that live on the internet. My interest in web development
                started back in 2020
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ color: theme.palette.slate.light }}
              >
                Here are a few technologies I’ve been working with recently:
              </Typography>

              <Grid container>
                <Grid xs={6}>
                  {["Javascript (ES6+)", "React", "Node.js"]?.map(
                    (point, idx) => (
                      <Box
                        sx={{ display: "flex", alignItems: "center", mt: 1 }}
                      >
                        <EjectIcon
                          fontSize="15px"
                          color="secondary"
                          sx={{ transform: "rotate(90deg)", mr: 1, mb: 0 }}
                        />
                        <Typography
                          variant="subtitle2"
                          sx={{ color: theme.palette.slate.light }}
                        >
                          {point}
                        </Typography>
                      </Box>
                    )
                  )}
                </Grid>
                <Grid xs={6}>
                  {["Typescript", "React Native", "Mongodb"]?.map(
                    (point, idx) => (
                      <Box
                        sx={{ display: "flex", alignItems: "center", mt: 1 }}
                      >
                        <EjectIcon
                          fontSize="15px"
                          color="secondary"
                          sx={{ transform: "rotate(90deg)", mr: 1, mb: 0 }}
                        />
                        <Typography
                          variant="subtitle2"
                          sx={{ color: theme.palette.slate.light }}
                        >
                          {point}
                        </Typography>
                      </Box>
                    )
                  )}
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default About;
