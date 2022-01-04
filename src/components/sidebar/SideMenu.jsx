import React, { useEffect, useState } from "react";
import {
  ArrowForwardIosOutlined,
  ArrowBackIosOutlined,
  Dashboard,
  MarginRounded,
  EmojiObjects,
  PermContactCalendarRounded,
} from "@mui/icons-material";
import { useStyles } from "./stylesheet";

import MenuItem from "./helpers/MenuItem";
import sidebarLinks from "data/sidebarLinks.data";
import { sidebarBackground, profileImage } from "assets";

import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import "./index.css";

import { Divider, List, Typography, Box } from "@mui/material";

const drawerWidth = 240;
const icons = [
  <Dashboard />,
  <MarginRounded />,
  <EmojiObjects />,
  <PermContactCalendarRounded />,
];

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const SideMenu = ({ color, onCollapse, setOpen, open }) => {
  const theme = useTheme();
  const classes = useStyles();
  // const [open, setOpen] = React.useState(true);
  // const [inactive, setInactive] = useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(!open);
    // setInactive(!inactive);
  };

  // useEffect(() => {
  //   if (inactive) removeActiveClassFromSubMenu();
  //   onCollapse(inactive);
  // }, [inactive]);

  //just an improvment and it is not recorded in video :(
  // const removeActiveClassFromSubMenu = () => {
  //   document
  //     .querySelectorAll(".sub-menu")
  //     .forEach((el) => el.classList.remove("active"));
  // };

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton
          style={{
            backgroundColor: "black",
            color: "white",
            boxShadow: theme.shadows[1],
          }}
          onClick={handleDrawerClose}
        >
          {theme.direction === "rtl" || !open ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>

      <Divider />
      <List>
        {/* <ListItem button>
          <ListItemIcon>
            <Box
              sx={{
                minWidth: 50,
                height: 50,
                border: "3px solid #fff",
                borderRadius: "50%",
                boxShadow: 5,
              }}
            >
              <img
                style={{ borderRadius: "50%" }}
                src={profileImage}
                width="100%"
                height="100%"
                alt="my profile"
              />
            </Box>
          </ListItemIcon>
          <ListItemText primary={"Abhishek Patel"} />
        </ListItem> */}
        {sidebarLinks.map((menuItem, index) => (
          <MenuItem
            icon={icons[index]}
            name={menuItem.name}
            exact={menuItem.exact}
            to={menuItem.to}
            subMenus={menuItem.subMenus || []}
            iconClassName={menuItem.iconClassName}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
            index={index}
            onClick={() => open && setOpen(false)}
            handleSidebarClose={() => setOpen(false)}
          />
        ))}
      </List>
      {/* <Divider /> */}
    </Drawer>
  );
};

export default SideMenu;
