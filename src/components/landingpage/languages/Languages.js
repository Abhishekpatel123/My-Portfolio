import React, { useEffect } from "react";
import languages from "../../../data/languages";
import Heading from "../../../utils/Heading/Heading";
import Card from "./Card";
import "./Languages.css";
import staticData from "../../../data/staticData";

function Languages() {
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
    <div name="language" className="language">
      <div className="container">
        <Heading heading={staticData.skills.heading} />
        <section className="language_content">
          <h3 className="content_title">
            {staticData.skills.title} <span>{staticData.skills.sub_title}</span>
          </h3>
          <div className="card_container">
            {languages.map((lang) => (
              <Card lang={lang} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Languages;
