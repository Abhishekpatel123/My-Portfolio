import React from "react";
import Wrapper from "./Wrapper";
import {
  Box,
  Typography,
  Chip,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { useQuery } from "react-query";
import URL from "configs";
import projects from "data/projects";
// const getProjects = () => {
//   const url = `${URL}/projects`;
//   return fetch(url).then((result) => result.json());
// };
const isLoading = false;

function Projects() {
  // const { data: projects, isLoading } = useQuery("projects", getProjects);

  return (
    <Wrapper title="PROJECTS">
      {isLoading ? (
        <h2>loading</h2>
      ) : (
        <Grid container spacing={4}>
          {projects.length &&
            projects?.map((info, idx) => (
              // <Grid container style={{ padding: "10px" }} spacing={2} key={idx}>
              //   <Grid item xs={3}>
              //     <img src={info?.coverImage?.url} width = "60px" height = "60px" />
              //   </Grid>
              //   <Grid item xs={9}>
              // <Typography gutterBottom variant="body1">
              //   {info?.title}
              // </Typography>
              // <Box>
              //   {info?.tech_usages?.map((stack) => (
              //     <Chip
              //       label={stack?.name}
              //       size="small"
              //       style={{ marginRight: "10px" }}
              //       variant="filled"
              //     />
              //   ))}
              // </Box>
              //   </Grid>
              // </Grid>
              <Grid key={idx} item xs={12} md={4}>
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    alt="project image"
                    image={info?.imageURL}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="body1">
                      {info?.title}
                    </Typography>
                    <Box>
                      {info?.tech_usages?.map((item) => (
                        <Chip
                          label={item}
                          size="small"
                          style={{ marginRight: "10px", marginBottom: "10px" }}
                          variant="filled"
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      )}
    </Wrapper>
  );
}

export default Projects;
