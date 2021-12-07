import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import useStyles from "./stylesheet";

const Wrapper = ({ children, title }) => {
  const classes = useStyles();
  return (
    <Box my={3}>
      <Box display="flex" my={3}>
        <Typography
          className={classes.wrapper_title}
          variant="h6"
          color="GrayText"
        >
          {title}
          {" :"}
        </Typography>
        <Divider className={classes.divider} />
      </Box>
      {children}
    </Box>
  );
};

export default Wrapper;
