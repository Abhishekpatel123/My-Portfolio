import React from 'react';
import { FaFacebookF, FaInstagram, FaPlay, FaTwitter } from "react-icons/fa";
import './Banner.css'
import BannerSVG from '../../../assets/Banner'
export default function Banner() {

    return (
        <div id="banner">
            <div className="container">
                <div className="content">
                    <div className="left_banner">
                        <h4>Hi  Abhishek Patel</h4>
             
                        <h1>
                            MERN STACK DEVELOPER , <br />
                            LEARNIGN PYHTON, ML , AI , <br />
                            GOOD PROBLEM SOLVING SKILL 
                    </h1>
                    </div>
                    <div className="right_banner">
                        <BannerSVG
                            width="90%"
                            height="90%"
                            color="orange"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}