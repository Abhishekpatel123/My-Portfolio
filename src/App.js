import { useState, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Admin from "./pages/admin/Admin";
import Sidebar from "./components/sidebar/SideMenu";
import loadData from "./services/loadData";
import { useDispatch } from "react-redux";
import { setGlobal } from "./store/global";

function App() {
  const [inactive, setInactive] = useState(false);
  const [color, setColor] = useState("#000000");

  useEffect(() => {
    const URL = "http://localhost:1337/global";
    // loadData(URL).then((respose) => {
    //   disptach(setGlobal(respose));
    // });
  }, []);

  function CommingSoon({ inactive, title }) {
    return (
      <div
        style={{ marginLeft: "1rem" }}
        className={`${inactive ? "inactive" : ""}`}
      >
        {title}
      </div>
    );
  }

  const handleColor = () => {
    const arraySet = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
    ];
    const R =
      arraySet[Math.floor(Math.random() * 16)] +
      arraySet[Math.floor(Math.random() * 16)];
    const G =
      arraySet[Math.floor(Math.random() * 16)] +
      arraySet[Math.floor(Math.random() * 16)];
    const B =
      arraySet[Math.floor(Math.random() * 16)] +
      arraySet[Math.floor(Math.random() * 16)];
    // const A = arraySet[Math.floor(Math.random() * 16)] + arraySet[Math.floor(Math.random() * 16)];
    const color = `#${R}${G}${B}`;
    setColor(color);
  };

  const ColorPicker = () => {
    return (
      <div
        style={{
          position: "fixed",
          bottom: 10,
          right: 10,
          backgroundColor: "black",
          padding: "10px",
          zIndex: 100,
        }}
      >
        <button onClick={() => setColor("#000000")}>Default</button>
        <button onClick={handleColor}>Random</button>
        <p>{color}</p>
      </div>
    );
  };

  return (
    <div>
      <ColorPicker />
      <Sidebar
        color={color}
        onCollapse={(inactive) => {
          setInactive(inactive);
        }}
      />
      <div className={`route-container ${inactive ? "inactive" : ""}`}>
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <CommingSoon title="Dashboard Comming soon" inactive={inactive} />
            )}
          />
          <Route
            exact
            path="/portfolio2021"
            component={() => <LandingPage inactive={inactive} />}
          />
          <Route
            exact
            path="/portfolio2021/courses"
            component={() => <LandingPage inactive={inactive} />}
          />
          <Route
            exact
            path="/portfolio2021/videos"
            component={() => <LandingPage inactive={inactive} />}
          />
          <Route
            exact
            path="/portfolio2022"
            component={() => (
              <CommingSoon
                title="Portfolio2022 comming soon"
                inactive={inactive}
              />
            )}
          />
          <Route
            exact
            path="/portfolio2022/courses"
            component={() => (
              <CommingSoon
                title="Portfolio2022 comming soon"
                inactive={inactive}
              />
            )}
          />
          <Route
            exact
            path="/portfolio2022/videos"
            component={() => (
              <CommingSoon
                title="Portfolio2022 comming soon"
                inactive={inactive}
              />
            )}
          />
          <Route
            exact
            path="/aboutme"
            component={() => <LandingPage inactive={inactive} />}
          />
          <Route path="/admin" component={Admin} />
          {/* <Route path="/" >
        <Redirect to="/v1" />
      </Route> */}
        </Switch>
      </div>
    </div>
  );
}

export default App;
