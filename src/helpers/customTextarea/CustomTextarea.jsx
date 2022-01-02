import React from "react";
import { useStyles } from "./stylesheet";

const CustomTextarea = () => {
  const classes = useStyles();
  return (
    <textarea
      className={classes.input}
      placeholder="Add your suggestion here.."
    />
  );
};

export default CustomTextarea;
