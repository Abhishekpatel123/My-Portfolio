import React, { useEffect, useState } from "react";
import { Menu, MenuOpen } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { useMediaQuery } from "@mui/material";

import MenuItem from "./MenuItem";
import MobileMenuItem from "./MobileMenuItem";
import MYImage from "../../assets/images/abhishek.jpeg";
import "./index.css";
import sidebarLinks from "data/sidebarLinks.data";

// import user from "../../assets/user.jpg";
// import logo from "../../assets/logo/webscript.png";
// import logo from "../../assets/logo/logo.png";
// added more menuItems for testing

const SideMenu = ({ color, onCollapse }) => {
  const [inactive, setInactive] = useState(false);

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
        console.log(next);
        if (next !== null) {
          next.classList.toggle("active");
        }
      });
    });
  }, []);

  return (
    <div
      className={`side-menu ${inactive ? "inactive" : ""}`}
      style={{ backgroundColor: "whitesmoke", boxShadow: "2px 0px 8px 0px lightgray" }}
    >
      <div className="top-section">
        <div className="logo">
          <h3>A</h3>
        </div>
        <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
          {inactive ? (
            <i className="bi bi-arrow-right-square-fill"></i>
          ) : (
            <i className="bi bi-arrow-left-square-fill"></i>
          )}
        </div>
      </div>

      <div className="divider"></div>

      <div className="divider"></div>
      <div className="main-menu">
        <ul>
          {sidebarLinks.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              exact={menuItem.exact}
              to={menuItem.to}
              subMenus={menuItem.subMenus || []}
              iconClassName={menuItem.iconClassName}
              onClick={(e) => {
                if (inactive) {
                  setInactive(false);
                }
              }}
            />
          ))}
        </ul>
      </div>

      <div className="side-menu-footer">
        <div className="avatar">
          <img src={MYImage} alt="my profile" />
        </div>
        <div className="user-info">
          <h5>Abhishek Patel</h5>
          <p>abhipatel8719@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
