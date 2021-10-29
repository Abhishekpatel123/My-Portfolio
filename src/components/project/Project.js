import React, { useEffect, useState } from "react";
import Heading from "../../utils/Heading/Heading";
import "./Project.css";
import staticData from "../../data/staticData";

function Project() {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    const url = "http://localhost:1337/projects";
    fetch(url)
      .then((result) => result.json())
      .then((result) => setProjects(result))
      .catch((err) => alert("error"));
  }, []);
  return (
    <div className="project">
      <div className="container content">
        <Heading heading="My Projects" />
        <div className="card_container">
          {projects?.map((item , idx) => (
            <div className="card" key = {idx}>
              <div className="image_container">
                <img
                  src={`http://localhost:1337${item.coverImage.url}`}
                  alt="project"
                />
              </div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <div
                className="buttons"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop : 15
                }}
              >
                <a target="_blank" href={item.liveLink}>
                  <button>live</button>
                </a>
                {/* <a target="_blank" href={item.github_url}>
                  <button>github</button>
                </a> */}
                <span style={{ fontSize: 12 }}>{item.updated_at}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
