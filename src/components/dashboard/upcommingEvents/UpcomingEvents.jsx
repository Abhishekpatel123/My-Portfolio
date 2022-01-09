import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import Carousel from "react-elastic-carousel";
import { upcomingEventsData } from "data/dashboardData";

import completedPng from "assets/images/completed.png";
import pendingPng from "assets/images/pending.png";
import totalPng from "assets/images/total.png";
import runningPng from "assets/images/running.png";
import { Title } from "helpers";

const pnges = [runningPng, completedPng, pendingPng, totalPng];

const UpcomingEvents = () => {
  return (
    <>
      <Title name="Upcomming Events " />
      <Box my={2}>
        <Carousel itemsToShow={2}>
          {upcomingEventsData.map(({ title, description }, idx) => (
            <Card
              sx={{
                minWidth: "480px",
                background:
                  "linear-gradient(90.56deg,#27061a,#ff6363 29.69%,#9b4dff 52.6%,#100321 98.44%)",
                borderRadius: "12px",
                padding: "4px",
              }}
            >
              <CardContent
                style={{
                  backgroundColor: "#333",
                  borderRadius: "12px",
                  color: "white",
                  border: "1px solid hsla(0,0%,100%,.1)",
                  // padding: 10,
                }}
              >
                <Typography gutterBottom variant="subtitle1 ">
                  {title}
                </Typography>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="caption" component="p" >{description}</Typography>
                  {/* <img src={pnges[idx]} /> */}
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
