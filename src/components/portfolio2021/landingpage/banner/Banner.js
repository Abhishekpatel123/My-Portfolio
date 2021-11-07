import React, { useEffect, useState } from "react";
import staticData from "../../../../data/staticData";
import Typewriter from "typewriter-effect";
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
          <h4 className="orange_text_h4">
            Hi there 👋, my name is <span className="name">Abhishek Patel</span>
          </h4>
          {/* <h1>&lt; {currentSkill} /&gt;</h1> */}
          <h1>
            &lt;
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                // delay: 3000,
                strings: banner.skills,
              }}
            />
            /&gt;
          </h1>
          <p>
            I'm Abhishek Patel from India , and I am a Mern Stack Developer . I
            really enjoy lerarning languages and frameworks like{" "}
            <span>React js</span> ,<span>React Native</span> ,{" "}
            <span>Express js</span> etc also i am goot in probleming solving
            skill
          </p>
        </div>
      </div>
    </div>
  );
}
