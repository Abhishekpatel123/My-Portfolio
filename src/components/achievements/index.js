import React, { useEffect } from "react";
import Heading from "utils/Heading/Heading";
import MYImage from "assets/images/abhishek.jpeg";
import staticData from "data/staticData";
import { Zoom } from "react-reveal";
import { Box, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import EjectIcon from "@mui/icons-material/Eject";
import { achievements } from "data/achievementData";
const useStyles = makeStyles((theme) => ({
  ImageDiv: {
    marginBottom: "1rem",
  },
  image: {
    width: "100%",
  },
}));

const Achivements = () => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <div name="about" className="about container">
      <Heading questionNo="6" heading={staticData.achievement.heading} />
      <Zoom>
        <div>
          {achievements.map(({ Image, id }) => (
            <div className={classes.ImageDiv}>
              <img
                className={classes.image}
                key={id}
                src={Image}
                alt="my photo"
              />
            </div>
          ))}
          {/* <img src={MYImage} alt="my photo" /> */}
        </div>
      </Zoom>
    </div>
  );
};

export default Achivements;
