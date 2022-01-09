import React from "react";
import { Link } from "react-router-dom";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  selected: {
    backgroundColor: "#e5e5e5b8 !important",
  },
}));
const MenuItem = (props) => {
  const {
    name,
    to,
    selectedIndex,
    setSelectedIndex,
    index,
    icon,
    handleSidebarClose,
  } = props;
  const classes = useStyles();
  const handleListItemClick = (event, index) => {
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
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText className="list-item-text" primary={name} />
    </ListItemButton>
  );
};

export default MenuItem;
