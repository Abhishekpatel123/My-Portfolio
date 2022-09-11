import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Heading from "utils/Heading/Heading";
import "./Project.css";
import SubHeading from "helpers/SubHeading";
import projects from "../../data/projects";
import { useTheme } from "@mui/material/styles";
import { Chip, Grid, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { BsFolder2 } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";

const useStyles = makeStyles((theme) => ({
  rightMargin: {
    marginRight: 1,
  },
}));

const Project = () => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <div name="project" className="project">
      <div className="container content">
        <Heading questionNo="5" heading="My Projects" />
        {/* <div className="card_container"> */}
        <Grid container spacing={2}>
          {projects?.map((item, idx) => (
            <Grid key={idx} item sm={12} md={12} lg={12}>
              {/* <Card
                color="secondary"
                sx={{
                  minHeight: 300,
                  backgroundColor: theme.palette.primary.light,
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      mb: 4,
                      px: 2,
                    }}
                  >
                    <BsFolder2 fontSize={40} color="#9b4dff" />
                    <Box>
                      <FiGithub
                        fontSize={20}
                        color="#9b4dff"
                        className={classes.rightMargin}
                        style={{ marginRight: 1 }}
                      />
                      <HiOutlineExternalLink fontSize={20} color="#9b4dff" />
                    </Box>
                  </Box>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Word of the Day
                  </Typography>
                  <Typography variant="h5" component="div">
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                  </Typography>
                  <Typography variant="h6" color="whitesmoke">
                    {item.title}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card> */}
              <div
                className="card"
                style={{ color: theme.palette.primary.dark }}
                key={idx}
              >
                <div className="image_container">
                  <img src={item.imageURL} alt="project" />
                </div>
                {/* content */}
                <div className="card-content">
                  <Box>
                    <Typography
                      color="secondary"
                      variant="h4"
                      sx={{ fontWeight: 500 }}
                    >
                      {item.title}
                    </Typography>
                    <Typography gutterBottom variant="body1">
                      {item.description}
                    </Typography>
                    <SubHeading title="USED STACK" />
                    {/* <div style={{ display: "flex", margin: "10px 0" }}>
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
                          {skill}
                        </div>
                      ))}
                    </div> */}
                    <Grid container spacing={2}>
                      {item?.tech_usages?.map((skill, idx) => (
                        <Grid item key={idx}>
                          <Chip
                            label={skill}
                            variant="outlined"
                            color="slate"
                          />
                        </Grid>
                      ))}
                    </Grid>
                    <div
                      className="buttons"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: 15,
                      }}
                    >
                      {/* <a target="_blank" href={item.liveLink}>
                        <button>live</button>
                      </a> */}
                      <span style={{ fontSize: 12 }}>
                        {item?.updated_at?.split("T")[0]}
                      </span>
                    </div>
                  </Box>
                  <Box sx={{ display: "flex", gap: "10px" }}>
                    <IconButton onClick={() => window.open(item.githubLink)}>
                      <FiGithub fontSize={22} color="#9b1dff" />
                    </IconButton>
                    <IconButton onClick={() => window.open(item.liveLink)}>
                      <HiOutlineExternalLink fontSize={25} color="#9b1dff" />
                    </IconButton>
                  </Box>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>

        {/* </div> */}
      </div>
    </div>
  );
};

export default Project;

// const OldCard = () => (
// <div className="card" key={idx}>
//   <div className="image_container">
//     <img src={item.imageURL} alt="project" />
//   </div>
//   <h2>{item.title}</h2>
//   <p style={{ marginBottom: 1 }}>{item.description}</p>
//   <SubHeading title="USED STACK" />
//   <div style={{ display: "flex", margin: "10px 0" }}>
//     {item?.tech_usages?.map((skill, idx) => (
//       <div
//         style={{
//           backgroundColor: "black",
//           borderRadius: "20px",
//           padding: "3px 10px",
//           color: "whitesmoke",
//           fontSize: 10,
//           marginRight: 10,
//           boxShadow: " 0 0 4px gray",
//         }}
//         key={idx}
//       >
//         {skill}
//       </div>
//     ))}
//   </div>
//   <div
//     className="buttons"
//     style={{
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//       marginTop: 15,
//     }}
//   >
//     <a target="_blank" href={item.liveLink}>
//       <button>live</button>
//     </a>
//     <span style={{ fontSize: 12 }}>{item?.updated_at?.split("T")[0]}</span>
//   </div>
// </div>
// );
