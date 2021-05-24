import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'
import navData from '../configs/Navbar'
function Navbar() {
    const nav = useRef();

    function scrollFun() {
        if (window.scrollY > 10) nav.current.classList.add("navbar-scroll")
        else nav.current.className = "navbar"
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollFun)
    }, [])


    return (
        <nav ref={nav} className="navbar">
            <div className="container">
                <div className="navbar_container">
                    <ul className="navbar_left">
                        <div>
                            Abhi.PL
                        </div>
                    </ul>
                    <ul className="navbar_right">
                        {
                            navData.map((li, idx) => (
                                <li key={idx}>
                                    <Link activeClass="active" offset={li.offset} smooth spy to={li.to} >{li.name}</Link>
                                </li>
                            ))
                        }
                    </ul>

                </div>

            </div>
        </nav>
    )
}

export default Navbar
