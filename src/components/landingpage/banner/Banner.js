import React, { useEffect, useState } from "react";
import staticData from "../../../data/staticData";
import "./Banner.css";

export default function Banner() {
  let { banner } = staticData;
  const [currentSkill, setCurrentSkill] = useState(banner.skills[0]);

  useEffect(() => {
    let count = 0;
    let interval = setInterval(() => {
      if (count >= banner.skills.length) count = 0;
      setCurrentSkill(banner.skills[count]);
      count++;
    }, 2000);

    return interval;
  }, []);
  return (
    <div name="banner" className="banner" data-rellax-speed="10">
      <div className="container">
        <div className="banner_content">
          <h4 className="orange_text_h4">{banner.title}</h4>
          <h1>{currentSkill}</h1>
          <p>{banner.description}</p>
        </div>
      </div>
    </div>
  );
}
