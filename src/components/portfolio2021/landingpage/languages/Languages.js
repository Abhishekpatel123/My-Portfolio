import React, { useEffect, useRef, useState } from "react";
import Heading from "../../../../utils/Heading/Heading";
import Card from "./Card";
import "./Languages.css";
import staticData from "../../../../data/staticData";
import { Fade } from "react-reveal";

function Languages() {
  const [skills, setSkills] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    // api
    //   .getSkills()
    //   .then((result) => console.log(result, "resutl"))
    //   .catch((err) => {
    //     console.log(err, "error ");
    //   });
    fetch("http://localhost:1337/skills")
      .then((result) => result.json())
      .then((result) => setSkills(result))
      .catch((err) => console.log(err, "er"));
  }, []);

  // const observe = new IntersectionObserver((entries, observe) => {
  //     entries.forEach(entry => {
  //         if (!entry.isIntersecting) {
  //             return true
  //         }
  //         console.log(entry.target, 'card')
  //         entry.target.classList.toggle('fade-in')
  //         observe.unobserve(entry.target)
  //     })
  // }, {})
  // useEffect(() => {
  //     const cards = document.querySelectorAll('.card');
  //     cards.forEach(card => {
  //         observe.observe(card)
  //     })
  // }, [])

  return (
    <div name="skill" className="language skill">
      <div className="container">
        <Heading heading={staticData.skills.heading} />
        <section className="language_content">
          <h3 className="content_title">
            {staticData.skills.title} <span>{staticData.skills.sub_title}</span>
          </h3>
          <div className="card_container">
            {skills?.map((lang, idx) => (
              <Card key={idx} lang={lang} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Languages;
