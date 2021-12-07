import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";

import Sidebar from "components/sidebar/SideMenu";
import { setGlobal } from "store/global";
import Dashboard from "pages/common/dashboard/Dashboard";
import { Motivation } from "pages/common/motivation";
import Portfolios from "pages/common/portfolios";
import LandingPage from "pages/portfolio2021/LandingPage";
import AboutMe from "pages/common/aboutMe/AboutMe";
import { ColorPicker, CommingSoon } from "helpers";
// import loadData from "services/loadData";
import { useQuery } from "react-query";
import URL from "configs";

const useStyles = makeStyles((theme) => ({
  main_content: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0px !important",
      padding: "0px !important",
    },
  },
}));

const loadData = () => fetch(`${URL}/global`).then((result) => result.json());

function App() {
  // sidebar toggle state
  const [inactive, setInactive] = useState(false);
  const dispatch = useDispatch();
  // global state of color
  const { color } = useSelector((state) => state.global);
  const classes = useStyles();

  const { data, isLoading } = useQuery("global", loadData);
  useEffect(() => dispatch(setGlobal(data)), [isLoading]);

  return (
    <div>
      <ColorPicker />
      <Sidebar color={color} onCollapse={(inactive) => setInactive(inactive)} />
      <div
        style={{ padding: "0px 0px 15px 40px" }}
        className={`route-container ${inactive ? "inactive" : ""} ${
          classes.main_content
        }`}
      >
        <Switch>
          <Route
            exact
            path="/portfolio2021"
            component={() => <LandingPage inactive={inactive} />}
          />
          <Route
            exact
            path="/"
            component={() => (
              <Dashboard title="Dashboard Comming soon" inactive={inactive} />
            )}
          />
          <Route
            exact
            path="/portfolios"
            component={() => (
              <Portfolios title="Dashboard Comming soon" inactive={inactive} />
            )}
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
          <Route exact path="/aboutme" component={() => <AboutMe />} />
          <Route exact path="/motivations" component={() => <Motivation />} />

          {/* <Route
            exact
            path="/portfolio2021/courses"
            component={() => <LandingPage inactive={inactive} />}
          />
          <Route
            exact
            path="/portfolio2021/videos"
            component={() => <LandingPage inactive={inactive} />}
          /> */}
          {/* <Route
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
          /> */}
        </Switch>
      </div>
    </div>
  );
}

export default App;
