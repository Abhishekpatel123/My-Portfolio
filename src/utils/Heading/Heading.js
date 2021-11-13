import React from "react";
import "./Heading.css";
import { Bounce } from "react-reveal";
import { useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  heading: {
    backgroundColor: "#eee",
    color: theme.palette.grey[800],
    padding: "0 10px",
  },
}));

function Heading({ heading }) {
  const { color } = useSelector((state) => state.global);
  const classes = useStyles();
  return (
    <Bounce>
      <div className="heading" style={{ position: "relative" }}>
        <hr
          style={{
            position: "absolute",
            top: "50%",
            zIndex: -1,
            width: "70%",
            height: "2.5px",
            borderRadius: 20,
            border: "none",
            background: "linear-gradient(to right, #a770ef, #cf8bf3, #fdb99b)",
            backgroundColor: "gray",
            transform: "transateX(-50%)",
          }}
        />
        <h1 className={classes.heading}> {heading}</h1>
      </div>
    </Bounce>
  );
}

export default Heading;
