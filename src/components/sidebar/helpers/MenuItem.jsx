import React, { useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Avatar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
/**
 * @author
 * @function MenuItem
 **/

const useStyles = makeStyles((theme) => ({
  selected: {
    backgroundColor: "#e5e5e5b8 !important",
  },
}));
const MenuItem = (props) => {
  const {
    name,
    subMenus,
    iconClassName,
    onClick,
    to,
    exact,
    selectedIndex,
    setSelectedIndex,
    index,
    icon,
    handleSidebarClose,
  } = props;
  const [expand, setExpand] = useState(false);
  const classes = useStyles();
  const handleListItemClick = (event, index) => {
    console.log(index);
    setSelectedIndex(index);
    handleSidebarClose();
  };

  return (
    <ListItemButton
      sx={{ mb: 0.2 }}
      key={index}
      classes={{
        selected: classes.selected,
      }}
      selected={selectedIndex === index}
      onClick={(event) => handleListItemClick(event, index)}
      component={Link}
      to={to}
      // onClick={onClick}
    >
      {/* <Link
        exact
        to={to}
        onClick={() => setExpand(!expand)}
        className={`menu-item`}
      > */}
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText className="list-item-text" primary={name} />
      {/* <div className="menu-icon">
          <i className={iconClassName}></i>
        </div> */}
      {/* </Link> */}
      {/* {subMenus && subMenus.length > 0 ? (
        <List className={`sub-menu ${expand ? "active" : ""}`}>
        {subMenus.map((menu, index) => (
          <ListItemButton key={index}>
          <NavLink to={menu.to}>{menu.name}</NavLink>
          </ListItemButton>
          ))}
          </List>
        ) : null} */}
    </ListItemButton>
  );
};

export default MenuItem;
