const { makeStyles } = require("@mui/styles");

export const useStyles = makeStyles((theme) => ({
  input: {
    outline: "none",
    border: "none",
    width: "250px",
    transition: "all .4s ease",
    "&:focus": {
      width: "300px",
      height: "50px",
    },
  },
}));
