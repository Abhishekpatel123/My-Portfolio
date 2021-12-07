import React, { useEffect, useState } from "react";
import {
  ArrowForwardIosOutlined,
  ArrowBackIosOutlined,
  Dashboard,
  MarginRounded,
  EmojiObjects,
  PermContactCalendarRounded,
} from "@mui/icons-material";
import { Box } from "@mui/material";

import MenuItem from "./MenuItem";
import sidebarLinks from "data/sidebarLinks.data";
import { sidebarBackground, profileImage } from "assets";
import "./index.css";

import { Divider, List, Typography } from "@mui/material";
// import { useSelector } from "react-redux";

const icons = [
  <Dashboard />,
  <MarginRounded />,
  <EmojiObjects />,
  <PermContactCalendarRounded />,
];

const SideMenu = ({ color, onCollapse }) => {
  const [inactive, setInactive] = useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  useEffect(() => {
    if (inactive) removeActiveClassFromSubMenu();
    onCollapse(inactive);
  }, [inactive]);

  //just an improvment and it is not recorded in video :(
  const removeActiveClassFromSubMenu = () => {
    document
      .querySelectorAll(".sub-menu")
      .forEach((el) => el.classList.remove("active"));
  };

  /*just a little improvement over click function of menuItem
    Now no need to use expand state variable in MenuItem component
  */
  useEffect(() => {
    let menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((el) => {
      el.addEventListener("click", (e) => {
        const next = el.nextElementSibling;
        removeActiveClassFromSubMenu();
        menuItems.forEach((el) => el.classList.remove("active"));
        el.classList.toggle("active");
        if (next !== null) next.classList.toggle("active");
      });
    });
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: `url(${sidebarBackground})`,
        backgroundSize: "contain",
        borderTopRightRadius: 20,
        boxShadow: 1,
      }}
      className={`side-menu ${inactive ? "inactive" : ""}`}
    >
      <Box
        sx={{
          boxShadow: 10,
          borderTopRightRadius: 20,
          bgcolor: "#dedeefa1",
          backdropFilter: "blur(15px)",
          height: "100vh",
        }}
        // className={`side-menu ${inactive ? "inactive" : ""}`}
        className={`side-menu-inner`}
      >
        <Box
          minHeight={60}
          position="relative"
          display="flex"
          alignItems="center"
        >
          <Box
            sx={{
              minWidth: 55,
              height: 55,
              border: "3px solid #fff",
              borderRadius: "50%",
              boxShadow: 5,
            }}
          >
            <img
              style={{
                borderRadius: "50%",
              }}
              src={profileImage}
              width="100%"
              height="100%"
              alt="my profile"
            />
          </Box>
          <Box pl={1.5} className="user-info">
            <Typography variant="caption" color="HighlightText">
              always learning{" "}
            </Typography>
            <h3>Abhishek Patel</h3>
          </Box>

          <Box
            onClick={() => setInactive(!inactive)}
            className="toggle-menu-btn"
            sx={{ boxShadow: 2 }}
          >
            {inactive ? <ArrowForwardIosOutlined /> : <ArrowBackIosOutlined />}
          </Box>
        </Box>

        <Divider sx={{ mt: 4, mb: 1 }} light />
        <div className="main-menu">
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
                onClick={() => inactive && setInactive(false)}
              />
            ))}
          </List>
        </div>

        <div className="side-menu-footer">
          <div className="avatar">
            <img src={profileImage} alt="my profile" />
          </div>
          <div className="user-info">
            <h5>Abhishek Patel</h5>
            <p>abhipatel8719@gmail.com</p>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default SideMenu;
