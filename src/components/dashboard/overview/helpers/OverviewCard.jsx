import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";

import completedPng from "assets/images/completed.png";
import pendingPng from "assets/images/pending.png";
import totalPng from "assets/images/total.png";
import runningPng from "assets/images/running.png";

const pnges = [runningPng, completedPng, pendingPng, totalPng];

const OverviewCard = ({ name, number, idx }) => {
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="subtitle1 ">
          {name}
        </Typography>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h4">{number}</Typography>
          <img src={pnges[idx]} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default OverviewCard;
