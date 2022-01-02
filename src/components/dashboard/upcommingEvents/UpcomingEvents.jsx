import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import Carousel from "react-elastic-carousel";
import { upcomingEventsData } from "data/dashboardData";

import completedPng from "assets/images/completed.png";
import pendingPng from "assets/images/pending.png";
import totalPng from "assets/images/total.png";
import runningPng from "assets/images/running.png";

const pnges = [runningPng, completedPng, pendingPng, totalPng];

const UpcomingEvents = () => {
  return (
    <>
      <h3 style={{ margin: "2rem 0 .4rem 0" }}>Upcomming Events</h3>
      <Box my={2}>
        <Carousel itemsToShow={3}>
          {upcomingEventsData.map(({ name, number }, idx) => (
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
    </>
  );
};

export default UpcomingEvents;
