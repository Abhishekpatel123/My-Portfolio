import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  profile_img_container: {
    display: "flex ",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "160px",
  },
  profile_img: {
    marginTop: theme.spacing(2),
    borderRadius: "50%",
    border: "2px solid lightblue",
    width: 100,
    height: 100,
    backgroundImage: ({ profileImage }) => `url(${profileImage})`,
    backgroundSize: "cover",
    boxShadow: "0 0 0 10px #d3e1ec , 0 0 0 50px #e4ebf1",
    animation: `$inout 3000ms alternate infinite  ${theme.transitions.easing.easeInOut}`,
  },
  "@keyframes inout": {
    "0%": {
      boxShadow: "0 0 0 10px #d3e1ec , 0 0 0 50px #e4ebf1",
    },
    "100%": {
      boxShadow: "0 0 0 30px #d3e1ec , 0 0 0 50px #e4ebf1",
    },
  },
  title: {
    letterSpacing: 2,
    fontSize: "40px",
    fontStyle: "italic",
    fontFamily: "fantasy",
    backgroundColor: "red",
    backgroundImage: "linear-gradient(45deg, #f3ec78, #af4261)",
    backgroundSize: "100%",
    backgroundRepeat: "repeat",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    MozBackgroundClip: "text",
    MozTextFillColor: "transparent",
  },
}));
