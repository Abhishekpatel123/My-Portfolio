import React, { useEffect, useState } from "react";
import Heading from "../../../../utils/Heading/Heading";
import "./Project.css";
import staticData from "../../../../data/staticData";

function Project() {
  const [projects, setProjects] = useState([]);

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
          {projects?.map((item, idx) => (
            <div className="card" key={idx}>
              <div className="image_container">
                <img
                  src={`http://localhost:1337${item.coverImage.url}`}
                  alt="project"
                />
              </div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <div style={{ display: "flex", margin: "10px 0" }}>
                {item?.tech_usages?.map((skill, idx) => (
                  <div
                    style={{
                      backgroundColor: "black",
                      borderRadius: "20px",
                      padding: "3px 10px",
                      color: "whitesmoke",
                      fontSize: 10,
                      marginRight: 10,
                      boxShadow: " 0 0 4px gray",
                    }}
                    key={idx}
                  >
                    {skill.name}
                  </div>
                ))}
              </div>
              <div
                className="buttons"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 15,
                }}
              >
                <a target="_blank" href={item.liveLink}>
                  <button>live</button>
                </a>
                {/* <a target="_blank" href={item.github_url}>
                  <button>github</button>
                </a> */}
                <span style={{ fontSize: 12 }}>{item?.updated_at?.split("T")[0]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
