import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";

import { ColorPicker } from "helpers";
import { setGlobal } from "store/global";
import Sidebar from "components/sidebar/SideMenu";
import URL from "configs";
import Routes from "./Routes";
// import loadData from "services/loadData";

const useStyles = makeStyles((theme) => ({
  main_content: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0px !important",
      padding: "0px !important",
    },
  },
}));

// const loadData = () => fetch(`${URL}/global`).then((result) => result.json());

function App() {
  const classes = useStyles();
  // const dispatch = useDispatch();
  const { color } = useSelector((state) => state.global);
  const [open, setOpen] = useState(false);

  // const { data, isLoading } = useQuery("global", loadData);
  // useEffect(() => dispatch(setGlobal(data)), [isLoading]);

  return (
    <div>
      <ColorPicker />
      {/* <Sidebar
        setOpen={setOpen}
        open={open}
        color={color}
        onCollapse={(inactive) => setOpen(inactive)}
      /> */}
      <div
        style={{ padding: "0px 0px 15px 40px" }}
        // className={`route-container ${!open ? "inactive" : ""} ${
        //   classes.main_content
        // }`}
      >
        <Routes inactive={open} />
      </div>
    </div>
  );
}

export default App;
