import React from "react";
import bg1 from "./bg1.svg";
import { Box, Typography, Button, Grid } from "@mui/material";
// import {JavascriptIcon} from '@mui/icons-material';
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    width: "900px",
    overflow: "hidden",
    boxShadow: theme.shadows[1],
    borderRadius: 3,
    transform: "translateY(0px)",
    transition: "all .2s ease-in",
    "&:hover": {
      boxShadow: theme.shadows[1],
      transform: "translateY(-6px)",
      cursor: "pointer",
    },
    "&:hover $overlay": {
      transform: "translateX(0px)",
    },
  },
  portfolioCard: {
    backgroundImage: `url(${bg1})`,
    width: "900px",
    borderLeft: "4px inset orange",
    height: "200px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    padding: "5px 2rem 0 0",
    position: "relative",
  },
  overlay: {
    borderRadius: 3,
    position: "absolute",
    height: "100%",
    width: "100%",
    transform: "translateX(-100%)",
    display: "flex",
    justifyContent: "center",
    zIndex: "100",
    // backgroundColor: "#7a377a99",
    backgroundColor: "#424242b7",
    transition: "all .4s ease-out",
  },
  title: {
    letterSpacing: 2,
    fontSize: "59px",
    fontStyle: "italic",
    fontFamily: "fantasy",
    backgroundColor: "red",
    backgroundImage: "linear-gradient(45deg, #f3ec78, #af4261)",
    backgroundSize: "100%",
    backgroundRepeat: "repeat",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    MozBackgroundClip: "text",
    MozTextFillColor: "transparent",
  },
}));

function Portfolios() {
  const classes = useStyles();

  return (
    <div>
      <Box py={4}>
        {/* 2021 portfolio card  */}
        <div className={classes.root}>
          <div className={classes.overlay}>
            <Box display="flex" alignItems="center" gap="20px">
              {/* <Button variant="outlined">View Code</Button> */}
              <Button variant="outlined" href="/portfolio2021" target="_blank">
                View Portfolio
              </Button>
            </Box>
          </div>
          <div className={classes.portfolioCard}>
            <Box width="50%" height="100%" style={{ position: "relative" }}>
              <h4 className={classes.title}>PORTFOLIO 2021</h4>
            </Box>
          </div>
        </div>
      </Box>

      {/* 2022 portfolio card  */}
      <Box py={2}>
        <div className={classes.root}>
          <div className={classes.overlay}>
            <Box display="flex" alignItems="center" gap="20px">
              {/* <Button variant="outlined">View Code</Button> */}
              <Button target="_blank">Comming Soon</Button>
            </Box>
          </div>
          <div className={classes.portfolioCard}>
            <Box width="50%" height="100%" style={{ position: "relative" }}>
              <h4 className={classes.title}>PORTFOLIO 2022</h4>
            </Box>
          </div>
        </div>
      </Box>
    </div>
  );
}

export default Portfolios;
