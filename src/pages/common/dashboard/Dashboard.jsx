import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PieChart, Pie, Tooltip, Cell, Legend, PolarAngleAxis } from "recharts";
import "./stylesheet.css";
import { Bar } from "react-chartjs-2";
import {} from "chart.js";
import { Grid } from "@mui/material";
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

const Dashboard = () => {
  const { color } = useSelector((state) => state.global);
  const { projects } = useSelector((state) => state.portfolio2021);

  const colors = [color, "#000000"];
  const [labels, setLabels] = useState([]);
  const [values, setValues] = useState([]);

  useEffect(() => {
    const url = `https://portfolio-backend-12345.herokuapp.com/projects`;
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
    <div className="dashboard">
      <h2 className="title">Projects</h2>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <PieChart
            data={data}
            width={300}
            height={200}
          >
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
      </Grid>
    </div>
  );
};

export default Dashboard;
