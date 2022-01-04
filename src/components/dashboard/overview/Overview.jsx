import React from "react";
import { Grid } from "@mui/material";

import { overviewData } from "data/dashboardData";
import OverviewCard from "./helpers/OverviewCard";
import { Title } from "helpers";

const Overview = () => {
  return (
    <>
      <Title name="Overview" />
      <Grid container sx={{ mt: 1 }} spacing={2}>
        {overviewData.map(({ name, number }, idx) => (
          <Grid item xs={12} sm={4} md={3}>
            <OverviewCard name={name} number={number} idx={idx} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Overview;
