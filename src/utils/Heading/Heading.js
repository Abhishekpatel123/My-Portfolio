import React from "react";
import "./Heading.css";
import { Bounce } from "react-reveal";

function Heading({ heading }) {
  return (
    <Bounce>
      <div className="heading" style={{ position: "relative" }}>
        <hr
          style={{
            position: "absolute",
            top: "50%",
            zIndex: -1,
            width: "70%",
            height: "3px",
            backgroundColor: "gray",
            transform: "transateX(-50%)",
          }}
        />
        <h1 style={{ backgroundColor: "#eee", padding: "0 10px" }}>
          {" "}
          {heading}
        </h1>
      </div>
    </Bounce>
  );
}

export default Heading;
