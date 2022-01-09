import React from "react";
import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import { AddCircleOutline } from "@mui/icons-material";

import CommentCard from "./helpers/commentCard/CommentCard";
import CommingSoon from "helpers/CommingSoon";
import { useStyles } from "./stylesheet";
import { CustomTextarea } from "helpers";
import CustomButton from "helpers/customButton/CustomButton";

const commingSoon = false;
const Suggestion = () => {
  const classes = useStyles();

  return (
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
          <CustomTextarea />
        </Box>
      </Grid>
      <Grid item>
        <CustomButton name="Add Suggestion" StartIcon={AddCircleOutline} />
      </Grid>
      {/* commnets of people  */}
      <Grid item xs={12} sx={{ my: 2 }}>
        {!commingSoon ? (
          [1, 2, 3, 4, 5, 6, 7].map(() => <CommentCard />)
        ) : (
          <CommingSoon title="Comment feature Comming Soonn" />
        )}
      </Grid>
    </Grid>
  );
};

export default Suggestion;
