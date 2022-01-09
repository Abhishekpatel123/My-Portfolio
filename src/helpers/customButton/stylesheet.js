import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    // margin: "2rem 0px 0.4rem !important",
    // background: "linear-gradient(45deg,#f83a3a 10%,#f13dd4 50%,#7000ff 90%)",
    padding: "6px 12px",
    margin: "0 16px",
    cursor: "pointer",
    color: "#a485ff",
    background: "rgba(164,133,255,.15)",
    transition: "all .2s",
    borderRadius: "4px",
    display: "flex",
    alignItems: "center",
    border: ".1px solid #a485ff",
    // "&:hover": {
    //   backgroundColor: "rgba(164,133,255,.45)",
    // },
    "&:acitve": {
      background: "#333",
    },
  },
  title: {
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: "800 !important",
  },
}));
