import React, { useEffect, useRef, useState } from "react";
import Heading from "utils/Heading/Heading";
import Card from "./Card";
import "./Languages.css";
import staticData from "data/staticData";
import { Fade } from "react-reveal";
import { Box, Stack, Chip, Grid, Divider, Typography } from "@mui/material";

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
    fetch(`https://portfolio-backend-12345.herokuapp.com/skills`)
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
  const data = [
    {
      name: "frontend",
      values: [
        "HTML",
        "CSS",
        "JAVASCRIPT",
        "REACT JS",
        "MATERIAL UI",
        "REDUX",
        "GRAPHQL",
        "BOOTSTARP",
        "REACT NATIVE",
      ],
    },
    {
      name: "backend",
      values: [
        "NODE JS",
        "EXPRESS JS",
        "MONGODB",
        "MONGOOSE",
        "MYSQL",
        "STARPI",
        "SOCKET.IO",
      ],
    },
    {
      name: "languages",
      values: ["JAVASCRIPT", "PYTHON", "C", "C++"],
    },
    {
      name: "tools",
      values: ["VS CODE", "GIT", "GITHUB"],
    },
    {
      name: "learning",
      values: [
        "REACT NATIVE",
        "AWS",
        "NEXT JS",
        "FIREBASE",
        "TYPESCRIPT",
        "DATA STRUCTURE",
      ],
    },
  ];

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
          <Box my={3}>
            <Grid container direction="column" spacing={2}>
              {data?.map((item, idx) => (
                <Grid key={idx} item>
                  <Typography
                    variant="h6"
                    style={{
                      fontStyle: "italic",
                      fontFamily: "cursive",
                      paddingRight: 10,
                    }}
                    gutterBottom
                  >
                    -{item.name}
                  </Typography>
                  <Grid container spacing={2}>
                    {item?.values?.map((skill) => (
                      <Grid item>
                        <Chip label={skill} variant="outlined" />
                      </Grid>
                    ))}
                  </Grid>
                  {/* <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                  >
                    {item?.values?.map((skill) => (
                      <Chip label={skill} variant="outlined" />
                    ))}
                  </Stack> */}
                </Grid>
              ))}
            </Grid>
          </Box>
        </section>
      </div>
    </div>
  );
}

export default Languages;
