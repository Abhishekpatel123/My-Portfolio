import React from "react";
import { Fade } from "react-reveal";
import staticData from "data/staticData";

const Status = () => {
  return (
    <div className="data_in_number">
      <Fade>
        <div className="container">
          <div className="content">
            {/* <hr /> */}
            <div className="data_container">
              {staticData.data_in_number.map(({ number, title }, idx) => (
                <div>
                  <h1 style={{ textAlign: "center", margin: ".5rem 0" }}>
                    {number}
                  </h1>
                  <h4 style={{ color: "gray", marginBottom: 10 }}>{title}</h4>
                </div>
              ))}
            </div>
            {/* <hr /> */}
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Status;
