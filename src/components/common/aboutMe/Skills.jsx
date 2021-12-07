import React from "react";
import { Box, Typography, Grid, Chip } from "@mui/material";
import skills from "data/skills.data";

import Wrapper from "./Wrapper";

const Skills = () => {
  return (
    <Wrapper title="SKILLS">
      <Grid container direction="column" spacing={2}>
        {skills?.map((item, idx) => (
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
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default Skills;
