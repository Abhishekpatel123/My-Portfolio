import React from "react";
import Wrapper from "./Wrapper";
import { Box, Typography, Chip, Grid } from "@mui/material";
import { useQuery } from "react-query";

const getProjects = () => {
  const url = `${process.env.URL}/projects`;
  return fetch(url).then((result) => result.json());
};

function Projects() {
  const { data: projects, isLoading } = useQuery("projects", getProjects);

  return (
    <Wrapper title="PROJECTS">
      {isLoading ? (
        <h2>loading</h2>
      ) : (
        projects.length &&
        projects?.map((info, idx) => (
          <Grid container style={{ padding: "10px" }} spacing={2} key={idx}>
            <Grid item xs={3}>
              <img src={info?.coverImage?.url} />
            </Grid>
            <Grid item xs={9}>
              <Typography gutterBottom variant="body1">
                {info?.title}
              </Typography>
              <Box>
                {info?.tech_usages?.map((stack) => (
                  <Chip
                    label={stack?.name}
                    size="small"
                    style={{ marginRight: "10px" }}
                    variant="filled"
                  />
                ))}
              </Box>
            </Grid>
          </Grid>
        ))
      )}
    </Wrapper>
  );
}

export default Projects;
