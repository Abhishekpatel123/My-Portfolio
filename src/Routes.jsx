import React from "react";
import { Route, Switch } from "react-router-dom";
import { CommingSoon } from "helpers";
import { Loading } from "helpers";

const Dashboard = React.lazy(() => import("pages/dashboard/Dashboard"));
const Portfolios = React.lazy(() => import("pages/portfolios/Portfolios"));
const Portfolio2021 = React.lazy(() => import("pages/portfolio2021/Portfolio2021"));
const Motivation = React.lazy(() => import("pages/motivation/Motivation"));
const AboutMe = React.lazy(() => import("pages/aboutMe/AboutMe"));

// const { AboutMe, Motivation, Dashboard, Portfolios, Portfolio2021 } =
//   React.lazy(() => import("pages"));

const Routes = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/portfolio2021" component={Portfolio2021} />
        <Route exact path="/portfolios" component={Portfolios} />
        <Route exact path="/aboutme" component={AboutMe} />
        <Route exact path="/motivations" component={Motivation} />
        <Route exact path="/portfolio2022" component={CommingSoon} />
      </Switch>
    </React.Suspense>
  );
};

export default React.memo(Routes);
