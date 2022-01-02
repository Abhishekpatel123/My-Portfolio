import React from "react";
import { Grid, Box, Typography, Card, CardContent } from "@mui/material";

import completedPng from "assets/images/completed.png";
import pendingPng from "assets/images/pending.png";
import totalPng from "assets/images/total.png";
import runningPng from "assets/images/running.png";
import { overviewData } from "data/dashboardData";

const pnges = [runningPng, completedPng, pendingPng, totalPng];

const Overview = () => {
  return (
    <>
      <h3 style={{ padding: "1rem 0 .5rem 0" }}>Overview</h3>
      <Grid container sx={{ mt: 1 }} spacing={2}>
        {overviewData.map(({ name, number }, idx) => (
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
    </>
  );
};

export default Overview;
