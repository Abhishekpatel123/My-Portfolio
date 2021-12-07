import { Grid, Typography } from "@mui/material";
import workExperience from "data/workExperience";
import WECard from "./WECard";

const WorkExperience = () => {
  return (
    <>
      <Typography margin="auto" variant="h5" color="GrayText">
        WORK EXPERIENCE
      </Typography>
      <Grid item container spacing={2} xs={12} style={{ marginTop: "1rem" }}>
        {workExperience?.map((ele) => (
          <Grid item xs={12} sm={6} md={4}>
            <WECard info={ele} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};


export default WorkExperience;
