import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  sideContainer: {
    position: "fixed",
    top: 0,
    width: "100px",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    right: 0,
    justifyContent: "center !important",
  },
  emailText: {
    transform: "rotate(90deg)",
    letterSpacing: "3px",
    fontFamily: "Roboto Mono",
    cursor: "pointer",
  },
}));

const RightContent = () => {
  const classes = useStyles();
  return (
    <Box className={classes.sideContainer}>
      <a
        href="mailto:abhipatel8719@gmail.com"
        style={{ textDecoration: "none " }}
      >
        <Typography className={classes.emailText} color="slate">
          abhipatel8719@gmail.com
        </Typography>
      </a>
    </Box>
  );
};

export default RightContent;
