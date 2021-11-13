import {
  CardActionArea,
  Typography,
  Card,
  Grid,
  CardContent,
  Box,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Heading from "utils/Heading/Heading";

const motivationData = [
    {
        motivation : "Do everything you have to do, but not with ego, not with lust, not with envy but with love, compassion, humility, and devotion.",
        writer : "Lord Krishna"
    },
    {
        motivation : "Itne janmo ko baad hame insaan ka janam milta hai to fir us janam to hame normal life mai jeene ka kya fayada.",
        writer : ""
    }
]

const useStyles = makeStyles((theme) => ({
  description: {
    fontStyle: "italic",
    "& span": {
      fontSize: 20,
      fontWeight: 900,
      color : theme.palette.primary.dark
    },
  },
}));

function Motivation() {
  const classes = useStyles();
  return (
    <Box py={4} pr={2}>
      {/* heading  */}
      <Typography variant="h4">MOTIVATION</Typography>
      {/* card  */}

      <Grid container spacing={2} style={{ marginTop: 10, marginRight: 10 }}>
        {motivationData.map(({motivation , writer}) => (
          <Grid item xs={12} sm={4}>
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
                {/* <Button>– Lord Krishna</Button> */}
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Motivation;
