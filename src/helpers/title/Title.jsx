import React from "react";
import { Typography } from "@mui/material";
import { useStyles } from "./stylesheet";

const Title = ({ name }) => {
  const classes = useStyles();
  return (
    <h3 className={classes.root}>
      <Typography
        component={"em"}
        variant="h5"
        classes={{ root: classes.title }}
      >
        {name}
      </Typography>
    </h3>
  );
};

export default Title;
