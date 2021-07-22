import React, { useEffect, useState } from 'react';
import profileData from '../../../data/profileData';
import './Banner.css'


export default function Banner() {

    const [currentSkill, setCurrentSkill] = useState(profileData.bannerSkills[0]);

    useEffect(() => {
        let count = 0;
        let interval = setInterval(() => {
            if (count >= profileData.bannerSkills.length) count = 0
            setCurrentSkill(profileData.bannerSkills[count]);
            count++;
        }, 2000);

        return interval;
    }, [])
    return (
        <div name="banner" className="banner" data-rellax-speed="10" >
            <div className="container">
                <div className="banner_content">
                    <h4 className="orange_text_h4">{profileData.bannerTitle}</h4>
                    <h1>{currentSkill}</h1>
                    <p>{profileData.bannerDescription}</p>
                </div>
            </div>
        </div>
    )
}