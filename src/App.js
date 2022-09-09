import React from "react";

import { ColorPicker } from "helpers";
import Portfolio from "pages";


const App = () => (
  <>
    <ColorPicker />
    <div style={{ padding: "0px 0px 15px 0px", backgroundColor: "#0a192f" }}>
      <Portfolio />
    </div>
  </>
);

export default App;
