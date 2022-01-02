import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";

import URL from "configs";
import { Overview, UpcomingEvents, Suggestion } from "components/dashboard";
import { useStyles } from "./stylesheet";

// import { useQuery } from "react-query";
// import { PieChart, Pie, Tooltip, Cell, Legend } from "recharts";
// import { Bar } from "react-chartjs-2";

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

  return (
    <Box width="100%" height="100vh" pr={1}>
      {/* overview of our app */}
      <Overview />
      {/* upcoming events  */}
      <UpcomingEvents />
      {/* suggestion  */}
      <Suggestion />
    </Box>
  );
};

export default Dashboard;
