import React, { Avatar, Box, Typography } from "@mui/material";
import { useStyles } from "./stylesheet";

const CommentCard = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box
        minHeight={60}
        position="relative"
        display="flex"
        alignItems="center"
      >
        <Avatar src="/static/images/avatar/2.jpg" />
        <Box pl={1.5} className="user-info">
          <h4>Abhishek Patel</h4>
          <Typography variant="caption">Sun Dec 05 2021</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CommentCard;
