import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { useStyles } from "./stylesheet";
// import {JavascriptIcon} from '@mui/icons-material';

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
