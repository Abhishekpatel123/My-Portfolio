import React from "react";
import {
  Dashboard,
  MarginRounded,
  EmojiObjects,
  PermContactCalendarRounded,
} from "@mui/icons-material";
import { useStyles } from "./stylesheet";

import MenuItem from "./helpers/MenuItem";
import sidebarLinks from "data/sidebarLinks.data";

import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./index.css";

import { Divider, List } from "@mui/material";

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
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleDrawerClose = () => setOpen(!open);

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton className={classes.toggleIcon} onClick={handleDrawerClose}>
          {theme.direction === "rtl" || !open ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>

      <Divider />
      <List>
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
