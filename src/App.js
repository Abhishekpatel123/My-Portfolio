import { useState, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/portfolio2021/landingpage/LandingPage";
import Admin from "./pages/admin/Admin";
import Sidebar from "components/sidebar/SideMenu";
import loadData from "./services/loadData";
import { useDispatch, useSelector } from "react-redux";
import { setColor, setGlobal } from "./store/global";
import { About } from "components/portfolio2021/landingpage";
import Dashboard from "./pages/common/dashboard/Dashboard";

function App() {
  const [inactive, setInactive] = useState(false);
  // const [color, setColor] = useState("#a210da");
  const dispatch = useDispatch();
  const { color } = useSelector((state) => state);
  useEffect(() => {
    const URL = "http://localhost:1337/global";
    loadData(URL).then((respose) => {
      dispatch(setGlobal(respose));
    });
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
    // setColor(color);
    dispatch(setColor({ color }));
  };

  const ColorPicker = () => {
    return (
      <div className="color-picker">
        <button className="btn" onClick={() => setColor("#a210da")}>
          Default
        </button>
        <button className="btn" onClick={handleColor}>
          Random
        </button>
        <h6 style={{ color, marginTop: 5 }}>{color}</h6>
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
      <div
        style={{ padding: "0px 40px 15px 40px" }}
        className={`route-container ${inactive ? "inactive" : ""}`}
      >
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <Dashboard title="Dashboard Comming soon" inactive={inactive} />
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
          <Route exact path="/aboutme" component={() => <About />} />
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
