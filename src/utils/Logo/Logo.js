import React from 'react'
import LogoImage from '../../assets/images/logo.jpg'
import './Logo.css'
import videoLogo from '../../assets/video/_Logo.mp4';

function Logo() {
    return (
        <div className="logo">
            <img src={LogoImage} />
        </div>
    )
}

export default Logo
