import React from "react";
import { Grid, Box, Typography, Divider, Button } from "@mui/material";

import Images from "assets/index";
import useStyles from "./stylesheet";
import { SocialSites, WorkExperience } from "components/common/aboutMe";
import Skills from "components/common/aboutMe/Skills";
import Projects from "components/common/aboutMe/Projects";

const personalInfo = [
  {
    name: "hire me",
    values: ["+6267280684", "+8719098751"],
  },
  {
    name: "address",
    values: ["pipariya (M.P)"],
  },
  {
    name: "born in",
    values: ["April 04,2000"],
  },
];

function AboutMe() {
  const classes = useStyles({ profileImage: Images.profileImage });
  return (
    <Box py={4} pr={0.4}>
      {/* LEVEL ONE */}
      <Grid container>
        <Grid item xs={12} sm={4} className={classes.profile_img_container}>
          <Box className={classes.profile_img}></Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" color="secondary">
            Hello , I'm{" "}
          </Typography>
          <h3 className={classes.title}>ABHISHEK PATEL</h3>
          <h3 className={classes.title}>MERN STACK DEVELOPER</h3>
        </Grid>
        <Grid item xs={12} sm={2}>
          {personalInfo?.map(({ name, values }, idx) => (
            <Box display="flex" key={`${name}-${idx}`}>
              <Typography>{name} :</Typography>
              <Box>
                {values.map((value, index) => (
                  <Typography key={`${value}-${idx}-${index}`}>
                    {value}
                  </Typography>
                ))}
              </Box>
            </Box>
          ))}
          <Box mt={2}>
            <Button
              sx={{ displayPrint: "none" }}
              variant="contained"
              color="secondary"
              size="large"
              onClick={() => window.print()}
            >
              Print CV
            </Button>
          </Box>
        </Grid>

        {/* skills */}
        <Grid item xs={12} md={12} style={{ marginTop: "2rem" }}>
          <Skills />
        </Grid>

        {/* projects */}
        <Grid item xs={12}  style={{ marginTop: "2rem" }}>
          <Projects />
        </Grid>

        {/* work experience */}
        <Grid item xs={12} style={{ marginTop: "1rem" }}>
          <WorkExperience />
        </Grid>
      </Grid>
      <Divider light style={{ marginTop: "3rem" }} />

      {/* LEVEL THREE */}
      <SocialSites />
    </Box>
  );
}

export default AboutMe;
