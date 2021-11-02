import React from "react";
import { useSelector } from "react-redux";
import { PieChart, Pie, Tooltip, Cell, Legend, PolarAngleAxis } from "recharts";
import "./stylesheet.css";

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
  const { color } = useSelector((state) => state);

  const colors = [color, "#000000"];
  console.log(colors, "colors");

  return (
    <div className="dashboard">
      <h2 className="title">Projects</h2>
      <PieChart
        style={{ border: "1px solid red" }}
        data={data}
        width={400}
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
    </div>
  );
};

export default Dashboard;
