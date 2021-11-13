import React, { useEffect, useState } from "react";
import logo from "../../assets/logo/webscript.png";
// import logo from "../../assets/logo/logo.png";
import user from "../../assets/user.jpg";
import MYImage from "../../assets/images/abhishek.jpeg";

import MenuItem from "./MenuItem";
import "./index.css";
import { useSelector } from "react-redux";
import { HiOutlineMail } from "react-icons/hi";
import { useMediaQuery } from "@mui/material";
import MobileMenuItem from "./MobileMenuItem";
import { Menu, MenuOpen } from "@mui/icons-material";

// added more menuItems for testing
export const menuItems = [
  {
    name: "Dashboard",
    exact: true,
    to: "/",
    iconClassName: "bi bi-speedometer2",
  },
  {
    name: "Portfolio 2021",
    exact: true,
    to: `/portfolio2021`,
    iconClassName: "bi bi-flag-fill",
    subMenus: [
      { name: "Running Projects", to: "/portfolio2021/courses" },
      { name: "Learning New Tech", to: "/portfolio2021/videos" },
    ],
  },
  {
    name: "Portfolio 2022",
    to: `/portfolio2022`,
    iconClassName: "bi bi-flag",
    subMenus: [
      { name: "Courses", to: "/portfolio2022/courses" },
      { name: "Videos", to: "/portfolio2022/videos" },
    ],
  },
  {
    name: "About me",
    exact: true,
    to: `/aboutme`,
    iconClassName: "bi bi-flag",
  },
  // { name: "Design 2", to: `/design-2`, iconClassName: "bi bi-vector-pen" },
  // { name: "Design 3", to: `/design-3`, iconClassName: "bi bi-vector-pen" },
  // { name: "Design 4", to: `/design-4`, iconClassName: "bi bi-vector-pen" },
];

const SideMenu = ({ color, onCollapse }) => {
  const [inactive, setInactive] = useState(false);
  const { global } = useSelector((state) => state.global);
  const matches = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  useEffect(() => {
    if (inactive) {
      removeActiveClassFromSubMenu();
    }

    onCollapse(inactive);
  }, [inactive]);

  //just an improvment and it is not recorded in video :(
  const removeActiveClassFromSubMenu = () => {
    document.querySelectorAll(".sub-menu").forEach((el) => {
      el.classList.remove("active");
    });
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

  return !matches ? (
    <div
      className={`side-menu ${inactive ? "inactive" : ""}`}
      style={{ backgroundColor: color, boxShadow: "2px 0px 8px 0px lightgray" }}
    >
      <div className="top-section">
        <div className="logo">
          <h3>A</h3>
        </div>
        <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
          {inactive ? (
            <i class="bi bi-arrow-right-square-fill"></i>
          ) : (
            <i class="bi bi-arrow-left-square-fill"></i>
          )}
        </div>
      </div>

      <div className="divider"></div>

      <div className="divider"></div>
      <div className="main-menu">
        <ul>
          {menuItems.map((menuItem, index) => (
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
  ) : (
    <div
      className={`mobile-side-menu side-menu ${inactive ? "inactive" : ""}`}
      style={{ backgroundColor: color, boxShadow: "2px 0px 8px 0px lightgray" }}
    >
      <div className="top-section">
        <div className="logo">
          <h3>A</h3>
        </div>
        <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
          {inactive ? (
            <Menu color="primary" fontSize="large" />
          ) : (
            <MenuOpen fontSize="large" />
          )}
        </div>
      </div>

      <div className="divider"></div>

      <div className="divider"></div>
      <div className="main-menu">
        <ul>
          {menuItems.map((menuItem, index) => (
            <MobileMenuItem
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
