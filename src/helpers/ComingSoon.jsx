import { Typography } from "@mui/material";
import Title from "./title/Title";

// feature or page etc comming soon
const ComingSoon = ({ heading, inactive, title = "Comming Soon" }) => (
  <div className={`${inactive ? "inactive" : ""}`}>
    <Title name={heading} />
    <Typography variant="h5" sx={{ mt: 6 }} align="center">
      {title}
    </Typography>
  </div>
);

export default ComingSoon;
