import React from "react";

import Portfolio from "pages";

// import { ColorPicker } from "helpers";

const rootStyle = { padding: "0px 0px 15px 0px", backgroundColor: "#0a192f" };

const App = () => (
  <>
    {/* <ColorPicker /> */}
    <div style={rootStyle}>
      <Portfolio />
    </div>
  </>
);

export default App;
