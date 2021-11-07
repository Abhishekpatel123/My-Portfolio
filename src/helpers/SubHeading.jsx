import React from "react";

function SubHeading({ title, style }) {
  return (
    <div style={{ margin: "10px 0", ...style }}>
      <h4 style={{ fontWeight: 300 }}>{title}</h4>
    </div>
  );
}

export default SubHeading;
