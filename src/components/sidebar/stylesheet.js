import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  toggleIcon: {
    backgroundColor: "black",
    color: "white",
    boxShadow: theme.shadows[1],
  },

  root: {
    position: "fixed",
    // background: "#000",
    width: "300px",
    height: "100%",
    boxSizing: "border-box",
    transition: "width 0.2s ease-in",
    zIndex: 100,
    "&.inactive": {
      width: "80px",
    },
  },
  SidebarMenuInner: {
    padding: "30px 10px",
  },
  toggleMenuButton: {
    position: "absolute",
    top: "50%",
    right: "-30px",
    backgroundColor: "#fff",
    borderRadius: "50%",
    width: "30px",
    height: "30px",
    display: "grid",
    placeItems: "center",
    transform: "translateY(-50%)",
    cursor: "pointer",
    "&.active": {
      right: "-50px",
    },
  },

  mainMenu: {
    margin: "5px 0",
    position: "relative",
    overflowY: "scroll",
    overflowX: "hidden",
  },
  userInfo: {
    opacity: 1,
    transition: "opacity 0.2s ease-in",
    overflow: "hidden",
  },
}));
