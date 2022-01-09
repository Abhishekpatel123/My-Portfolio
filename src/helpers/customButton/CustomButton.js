import React from "react";
import { Button, Box, Typography, Icon } from "@mui/material";
import { AddCircleOutline } from "@mui/icons-material";
import { useStyles } from "./stylesheet";

const CustomButton = ({ StartIcon, name }) => {
  const classes = useStyles();
  const inputProps = {
    endIcon: <StartIcon />,
  };
  return (
    // <div className={classes.root}>
    <Button
      sx={{ height: "fit-content", textTransform: "capitalize" }}
      size="small"
      variant="outlined"
      {...inputProps}
    >
      {name}
    </Button>
    // </div>
  );
};

export default CustomButton;
