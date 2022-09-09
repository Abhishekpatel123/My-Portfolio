import React from "react";
import Heading from "utils/Heading/Heading";
import "./Languages.css";
import staticData from "data/staticData";
import { Box, Chip, Grid, Typography, useTheme } from "@mui/material";

function Languages() {
  const theme = useTheme();

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
        <Heading questionNo="2" heading={staticData.skills.heading} />
        <section className="language_content">
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
                      color: theme.palette.slate.main,
                    }}
                    gutterBottom
                  >
                    -{item.name}
                  </Typography>
                  <Grid container spacing={2}>
                    {item?.values?.map((skill) => (
                      <Grid item>
                        <Chip
                          label={skill}
                          variant="outlined"
                          color="secondary"
                        />
                      </Grid>
                    ))}
                  </Grid>
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
