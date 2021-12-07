import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Grid,
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Avatar,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { AddCircleOutline } from "@mui/icons-material";
import "./stylesheet.css";
import completedPng from "./completed.png";
import Carousel from "react-elastic-carousel";
import runningPng from "./running.png";
import pendingPng from "./pending.png";
import totalPng from "./total.png";
import CommingSoon from "helpers/CommingSoon";
// import { useQuery } from "react-query";
// import { PieChart, Pie, Tooltip, Cell, Legend } from "recharts";
// import { Bar } from "react-chartjs-2";

console.log(process.env,  process.env.REACT_APP_SERVER_URL , "process env");
const pnges = [runningPng, completedPng, pendingPng, totalPng];
const data = [
  {
    name: "Project Completed",
    value: 80,
  },
  {
    name: "Project Running",
    value: 20,
  },
];
const useStyles = makeStyles((theme) => ({
  input: {
    outline: "none",
    border: "none",
    width: "250px",
    transition: "all .4s ease",
    "&:focus": {
      width: "300px",
      height: "50px",
    },
  },
}));

const getProjects = () => {
  const url = `${process.env.URL}/projects`;
  return fetch(url).then((result) => result.json());
};

const Dashboard = () => {
  const { color } = useSelector((state) => state.global);
  const classes = useStyles();
  const colors = [color, "#000000"];
  const [labels, setLabels] = useState([]);
  const [values, setValues] = useState([]);
  const commingSoon = true;

  // const { data: projects, isLoading } = useQuery("projects", getProjects);
  useEffect(() => {
    // let array = [];
    // projects.forEach(({ tech_usages }) => {
    //   tech_usages?.forEach((skill) => array.push(skill.name));
    // });
    // const valuesArray = array.map((ele) => {
    //   let count = 0;
    //   array.forEach((item) => item === ele && count++);
    //   return count;
    // });
    // console.log(valuesArray, "value array ");
    // setValues(valuesArray);

    const url = `${process.env.URL}/projects`;
    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        let array = [];
        result.forEach(({ tech_usages }) => {
          tech_usages?.forEach((skill) => {
            array.push(skill.name);
          });
        });
        const valuesArray = array.map((ele) => {
          let count = 0;
          array.forEach((item) => {
            if (item === ele) count++;
          });
          return count;
        });
        setValues(valuesArray);
        // labels = labels.filter((ele, idx) => labels.findIndex(ele) === idx);
        console.log(labels, "labels");
        setLabels(array);
      })
      .catch((err) => {
        console.log(err, "thsis ie error ");
      });
  }, []);

  return (
    <Box width="100%" height="100vh" pr={1}>
      {/* internship done completed running  */}
      <h3 style={{ padding: "1rem 0 .5rem 0" }}>Overview</h3>
      <Grid container sx={{ mt: 1 }} spacing={2}>
        {[
          { name: "Running Projects", number: "04" },
          { name: "Completed Projets", number: "02" },
          { name: "Pending Projects", number: "05" },
          { name: "Total Projects", number: "11" },
        ].map(({ name, number }, idx) => (
          <Grid item xs={12} sm={4} md={3}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="subtitle1 ">
                  {name}
                </Typography>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="h4">{number}</Typography>
                  <img src={pnges[idx]} />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* upcomming feature and events and more */}
      <h3 style={{ margin: "2rem 0 .4rem 0" }}>Upcomming Events</h3>
      <Box my={2}>
        <Carousel itemsToShow={3}>
          {[
            { name: "Comment feature", number: "04" },
            { name: "Motivation quotes feature", number: "04" },
            { name: "Google Analytic feature", number: "02" },
            { name: "Progress analytic featue", number: "05" },
            { name: "Blog feature", number: "11" },
          ].map(({ name, number }, idx) => (
            <Card sx={{ minWidth: "280px" }}>
              <CardContent>
                <Typography gutterBottom variant="subtitle1 ">
                  {name}
                </Typography>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="h4">{number}</Typography>
                  <img src={pnges[idx]} />
                </Box>
              </CardContent>
            </Card>
          ))}
        </Carousel>
      </Box>

      <Grid container>
        <Grid item>
          <Box
            sx={{
              bgcolor: "white",
              borderRadius: 2,
              p: 1,
              pl: 2,
              mr: 1,
              boxShadow: 2,
              hight: "fit-content",
            }}
          >
            <textarea
              className={classes.input}
              placeholder="Add your suggestion here.."
            />
          </Box>
        </Grid>
        <Grid item>
          <Button
            sx={{ height: "fit-content" }}
            size="small"
            variant="outlined"
            startIcon={<AddCircleOutline />}
          >
            Add Suggestion
          </Button>
        </Grid>
        {/* commnets of people  */}
        <Grid item xs={12} sx={{ my: 2 }}>
          {!commingSoon ? (
            [1, 2, 3, 4, 5, 6, 7].map((el) => (
              <Box sx={{ border: "1px solid green", minHeight: "40px" }}>
                <Box
                  minHeight={60}
                  position="relative"
                  display="flex"
                  alignItems="center"
                >
                  <Avatar src="/static/images/avatar/2.jpg" />
                  <Box pl={1.5} className="user-info">
                    <h4>Abhishek Patel</h4>
                    <Typography variant="caption">Sun Dec 05 2021</Typography>
                  </Box>
                </Box>
              </Box>
            ))
          ) : (
            <CommingSoon title="Comment feature Comming Soonn" />
          )}
        </Grid>
      </Grid>

      {/* <Grid container sx={{ mt: 1 }} spacing={2}>
        {[
          { name: "Motivation quotes feature", number: "04" },
          { name: "Google Analytic feature", number: "02" },
          { name: "Progress analytic featue", number: "05" },
          { name: "Blog feature", number: "11" },
        ].map(({ name, number }, idx) => (
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="subtitle1 ">
                  {name}
                </Typography>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="h4">{number}</Typography>
                  <img src={pnges[idx]} />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid> */}

      {/* <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
        <PieChart data={data} width={300} height={200}>
        <Tooltip
              wrapperStyle={{}}
              contentStyle={{
                backgroundColor: "#000",
                boxShadow: "0 0 4px gray",
                borderRadius: 5,
                height: "40px",
                display: "flex",
                alignItems: "center",
              }}
              itemStyle={{
                fontSize: 12,
                fontWeight: "bold",
                color: "whitesmoke",
                fontFamily: "fantasy",
              }}
              labelStyle={{
                border: "1px solid green ",
              }}
              animationEasing="ease-in"
            />
            <Legend
              verticalAlign="bottom"
              height={20}
              iconType={"plainline"}
              wrapperStyle={{
                fontSize: 12,
                fontWeight: 600,
              }}
            />
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={50}
              fill="#119ef3"
              label
              isAnimationActive={true}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index] || "#a210da"} />
              ))}
            </Pie>
          </PieChart>
        </Grid>
        <Grid item xs={12} sm={8}>
          {labels.length > 0 && (
            <Bar
              data={{
                labels: labels,
                datasets: [
                  {
                    label: "My skill experience",
                    data: values,
                    backgroundColor: [
                      "rgba(255, 99, 132, 0.2)",
                      "rgba(255, 159, 64, 0.2)",
                      "rgba(255, 205, 86, 0.2)",
                      "rgba(75, 192, 192, 0.2)",
                      "rgba(54, 162, 235, 0.2)",
                      "rgba(153, 102, 255, 0.2)",
                      "rgba(201, 203, 207, 0.2)",
                    ],
                    borderColor: [
                      "rgb(255, 99, 132)",
                      "rgb(255, 159, 64)",
                      "rgb(255, 205, 86)",
                      "rgb(75, 192, 192)",
                      "rgb(54, 162, 235)",
                      "rgb(153, 102, 255)",
                      "rgb(201, 203, 207)",
                    ],
                    borderWidth: 1,
                  },
                ],
              }}
              width={100}
              // height={50}
              options={{ maintainAspectRatio: false }}
            />
          )}
        </Grid>
      </Grid> */}
    </Box>
  );
};

export default Dashboard;
