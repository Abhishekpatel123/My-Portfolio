import React, { useEffect, useState, Suspense } from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";

import URL from "configs";
import { Loading } from "helpers";
import { useStyles } from "./stylesheet";

const Overview = React.lazy(() =>
  import("components/dashboard/overview/Overview")
);
const UpcomingEvents = React.lazy(() =>
  import("components/dashboard/upcommingEvents/UpcomingEvents")
);
const Suggestion = React.lazy(() =>
  import("components/dashboard/suggestion/Suggestion")
);

const Dashboard = () => {
  const { color } = useSelector((state) => state.global);
  const classes = useStyles();
  const colors = [color, "#000000"];
  const [labels, setLabels] = useState([]);
  const [values, setValues] = useState([]);

  const getProjects = async () => {
    const url = `${URL}/projects`;
    try {
      const jsonResponse = await fetch(url);
      const response = await jsonResponse.json();

      let array = [];
      response.forEach(({ tech_usages }) => {
        tech_usages?.forEach((skill) => array.push(skill.name));
      });
      const valuesArray = array.map((ele) => {
        let count = 0;
        array.forEach((item) => item === ele && count++);
        return count;
      });
      setValues(valuesArray);
      setLabels(array);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return <Loading />
  return (
    <Box width="100%" height="100vh" pr={1}>
      <Suspense fallback={<Loading />}>
        {/* overview of our app */}
        <Overview />
        {/* upcoming events  */}
        <UpcomingEvents />
        {/* suggestion  */}
        <Suggestion />
      </Suspense>
    </Box>
  );
};

export default Dashboard;
