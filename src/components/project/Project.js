import React from "react";
import Heading from "../../utils/Heading/Heading";
import "./Project.css";
import staticData from "../../data/staticData";

function Project() {
  return (
    <div className="project">
      <div className="container content">
        <Heading heading="My Projects" />
        <div className="card_container">
          {staticData.projects.collection.map((item) => (
            <div className="card">
              <div className="image_container">
                <img
                  src="https://source.unsplash.com/WLUHO9A_xik/400x200"
                  alt="project"
                />
              </div>
              <h2>{item.title}</h2>
              <div className="buttons">
                <a target = "_blank" href={item.live_url}>
                  <button>live</button>
                </a>
                <a target = "_blank" href={item.github_url}>
                  <button>github</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
