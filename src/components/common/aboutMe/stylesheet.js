import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  //   wrapper css
  wrapper_title: {
    "&::first-child": {
      color: "red",
    },
  },
  divider: { margin: ".3rem 0 1rem 1rem", width: "40%" },
}));
