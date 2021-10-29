import React from "react";
import "./footer.css";
import { FiSmartphone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { GrLocationPin } from "react-icons/gr";
import { HiLocationMarker } from "react-icons/hi";
import videoLogo from "../../../assets/video/_Logo.mp4";
import Logo from "../../../utils/Logo/Logo";
import { useSelector } from "react-redux";

function Footer() {
  const global = useSelector((state) => state.global);
  
  return (
    <>
      <div className="social">
        <div className="container social_content">
          <div>
            <FiSmartphone />
            <p>+91 871976xxxx</p>
          </div>
          <div>
            <HiOutlineMail />
            <p>{global?.contactEmail}</p>
            <p>enquiry@a.patel.com</p>
          </div>
          <div>
            <HiLocationMarker />
            <p>No 5, North street ,</p>
            <p> Indore ,Madhya pradesh ,india </p>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="container footer_content">
          <Logo />
          <div className="footer_links">
            <ul>
              <li>Skills</li>
              <li>Contact</li>
              <li>Service</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <HiLocationMarker />
            <HiLocationMarker />
            <HiLocationMarker />
            <HiLocationMarker />
          </div>
        </div>
      </div>

      <div className="copyright">
        <div className="container copyright_content">
          <p>© 2021 copyright all right reserved</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
