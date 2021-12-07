import {
  CardActionArea,
  Typography,
  Card,
  Grid,
  CardContent,
  Box,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import motivaitions from "json/motivations.json";
// import Heading from "utils/Heading/Heading";

const useStyles = makeStyles((theme) => ({
  description: {
    fontStyle: "italic",
    "& span": {
      fontSize: 20,
      fontWeight: 900,
      color: theme.palette.primary.dark,
    },
  },
}));

function Motivation() {
  // const [motivations, setMotivations] = useState(motivationData);
  const classes = useStyles();
  return (
    <Box py={4} pr={2}>
      {/* heading  */}
      <Typography variant="h4">MOTIVATION</Typography>
      {/* card  */}
      <Grid container spacing={2} style={{ marginTop: 10, marginRight: 10 }}>
        {motivaitions?.map(({ motivation, writer }) => (
          <Grid item xs={12} key={motivation} sm={4}>
            <Card>
              <CardContent>
                <Typography
                  variant="body1"
                  className={classes.description}
                  color="text.secondary"
                >
                  <span>“</span> {motivation} <span>”</span>
                </Typography>
                <Typography></Typography>
              </CardContent>
              <CardActionArea>
                <Typography
                  variant="subtitle2"
                  style={{ fontWeight: 700, padding: 10 }}
                  align="right"
                  color="primary"
                >
                  – {writer}
                </Typography>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Motivation;
