import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import navData from "data/nav_data";
import { useSelector } from "react-redux";

function Navbar({ inactive }) {
  const header = useRef();
  const nav = useRef();
  const [navScroll, setNavScroll] = useState(false);
  const [open, setOpen] = useState(false);
  const { global } = useSelector((state) => state.global);

  const observer = new IntersectionObserver(
    (entries, observe) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          header?.current?.classList.add("header-scroll");
        } else {
          header?.current?.classList.remove("header-scroll");
        }
      });
    },
    { rootMargin: "-200px 0px 0px 0px" }
  );

  useEffect(() => {
    const banner = document.querySelector(".banner");
    observer.observe(banner);
  }, []);

  const openSidebar = (e) => {
    const line = document.querySelectorAll(".line");
    setOpen(!open);
    nav.current.classList.toggle("nav_translate");
    console.log(e.target.querySelectorAll("span"));
  };

  return (
    <header
      id="header"
      className={` ${navScroll ? "header-scroll" : "head"}`}
      ref={header}
    >
      <div className="container">
        <div className="content">
          <div className="bar" onClick={(e) => openSidebar(e)}>
            <span className={open ? "line" : null}></span>
            <span className={open ? "line_reverse" : null}></span>
          </div>
          <nav ref={nav} className="nav_mobile">
            {navData.map((link, idx) => (
              <Link
                key={idx}
                activeClass="active"
                spy={true}
                smooth={true}
                className="link"
                key={link.id}
                to={link.to}
                offset={-70}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          {/* <div className="socialLinksContainer">
            {global?.socialNetworks?.map((item, idx) => (
              <a className="social-icon" href={item.url} target="_blank">
                <img
                  width={15}
                  height={15}
                  key={`socail-icon${idx}`}
                  src={`http://localhost:1337${item.icon.url}`}
                />
              </a>
            ))}
          </div> */}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
