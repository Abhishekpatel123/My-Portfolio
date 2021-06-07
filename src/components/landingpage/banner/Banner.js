import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaInstagram, FaPlay, FaTwitter } from "react-icons/fa";
import './Banner.css'
import BannerSVG from '../../../assets/Banner'
const skills = [
    "MERN STACK DEVELOPER",
    "APP DEVELOPER",
    "PYTHON DEVELOPER (learning)"
]

export default function Banner() {

    const [currentSkill, setCurrentSkill] = useState(skills[0]);

    useEffect(() => {
        let count = 0;
        let interval = setInterval(() => {
            if (count >= skills.length) count = 0
            setCurrentSkill(skills[count]);
            count++;
        }, 2000)

        return interval

    }, [])
    return (
        <div className="banner">
            <div className="container
            ">
                <div className="banner_content">
                    <h4
                        className="orange_text_h4"
                    >
                        Hi there 👋, my name is Abhishek Patel
                        </h4>
                    <h1>{currentSkill}</h1>
                    <p>I'm Abhishek Patel from India , and I am a Mern Stack Developer . I really enjoy lerarning languages and frameworks like React js , React Native , Express js etc also i am goot in probleming solving skill</p>
                </div>
            </div>
        </div>
    )
}


{/* <div id="banner">
<div className="container">
    <div className="content">
        <div className="left_banner">
            <h4>Hi there 👋, my name is Abhishek Patel</h4>
            <h1>{currentSkill}</h1>
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
</div> */}