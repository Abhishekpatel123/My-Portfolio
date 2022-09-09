import React from "react";
import Typewriter from "typewriter-effect";
import { Button, Box, Typography, useTheme } from "@mui/material";

import "./Banner.css";
import cvPDF from "./kd-template-resume-abhishek.pdf";
import staticData from "../../data/staticData";

export default function Banner() {
  let { banner } = staticData;
  const theme = useTheme();

  return (
    <div name="banner" className="banner" data-rellax-speed="10">
      <div className="container">
        <Typography component="h6" variant="h6" gutterBottom color="secondary">
          Hi there 👋, my name is
        </Typography>
        <Typography
          component="h1"
          sx={{
            color: theme.palette.slate.light,
            fontWeight: 600,
            fontSize: "clamp(40px, 8vw, 80px);",
            letterSpacing: ".8px",
            lineHeight: 1,
            fontFamily: "cursive",
          }}
          gutterBottom
        >
          Abhishek Patel.
        </Typography>
        <Typography
          component="h1"
          sx={{
            color: theme.palette.slate.main,
            fontWeight: 600,
            fontSize: "clamp(40px, 8vw, 80px);",
            letterSpacing: ".8px",
            lineHeight: 1,
            fontFamily: "cursive",
          }}
          gutterBottom
        >
          I build things for the web.
        </Typography>
        <h1 className="type-writer">
          &lt;
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 150,
              strings: banner.skills,
            }}
          />
          /&gt;
        </h1>
        <Typography
          variant="subtitle2"
          component="p"
          sx={{
            color: theme.palette.slate.main,
          }}
          gutterBottom
        >
          I am a Web and App developer based in Gwalior. I really enjoy learning
          languages and frameworks like <span>React js</span>,{" "}
          <span>React Native</span>, <span>Express js</span> etc also I am good
          in problem solving skill
        </Typography>
        <Box mt={6}>
          <a href={cvPDF} style={{ textDecoration: "none" }} download>
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              sx={{ minWidth: "200px" }}
            >
              Resume
            </Button>
          </a>
        </Box>
      </div>
    </div>
  );
}
