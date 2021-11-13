import React from "react";
import staticData from "../../../../data/staticData";
import Typewriter from "typewriter-effect";
import "./Banner.css";
import { useSelector } from "react-redux";
import { Button, Box } from "@mui/material";
import cvPDF from "./cv.pdf";

export default function Banner() {
  let { banner } = staticData;
  const { color } = useSelector((state) => state.global);

  return (
    <div name="banner" className="banner" data-rellax-speed="10">
      <div className="container">
        <div className="banner_content">
          <h4 className="orange_text_h4">
            Hi there 👋, my name is <span className="name">Abhishek Patel</span>
          </h4>
          <h1 style={{ color, display: "flex" }}>
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
          <p>
            I'm Abhishek Patel from India , and I am a Mern Stack Developer . I
            really enjoy lerarning languages and frameworks like{" "}
            <span>React js</span> ,<span>React Native</span> ,{" "}
            <span>Express js</span> etc also i am good in problem solving
            skill
          </p>
          <Box mt={2}>
            <a href={cvPDF} style={{ textDecoration: "none" }} download>
              <Button variant="outlined">Resume</Button>
            </a>
          </Box>
        </div>
      </div>
    </div>
  );
}
