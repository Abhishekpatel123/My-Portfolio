import React, { useEffect } from "react";
import Heading from "utils/Heading/Heading";
import "./About.css";
import MYImage from "assets/images/abhishek.jpeg";
import staticData from "data/staticData";
import { Zoom } from "react-reveal";

function About() {
  useEffect(() => {
    let about_perspective = document.querySelector(".about_perspective");
    let about_content = document.querySelector(".about_content");

    about_content.addEventListener("mousemove", (e) => {
      let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
      let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
      about_content.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
    let [h1, p] = document.querySelector(".right").childNodes;
    let [image] = document.querySelector(".left").childNodes;
    about_content.addEventListener("mouseenter", (e) => {
      h1.style.transform = "translateZ(150px)";
      p.style.transform = "translateZ(150px)";
      image.style.transform = "translateZ(150px)";
    });
    // animated out
    about_content.addEventListener("mouseleave", (e) => {
      about_content.style.transform = `rotateY(0) rotateX(0)`;
      h1.style.transform = "translateZ(0px)";
      p.style.transform = "translateZ(0px)";
    });
  }, []);

  return (
    <div name="about" className="about container">
      <Heading heading={staticData.about.heading} />
      <Zoom>
        <div className="about_perspective ">
          <div className=" about_content">
            <div className="left">
              <img src={MYImage} alt="my photo" />
            </div>
            <div className="right">
              <h2>{staticData.about.title}</h2>
              <p>{staticData.about.description}</p>
            </div>
          </div>
        </div>
      </Zoom>
    </div>
  );
}

export default About;
