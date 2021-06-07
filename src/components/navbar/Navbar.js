import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'
import navData from '../../configs/nav_data'

function Navbar() {
    const nav = useRef();

    function scrollFun() {
        if (window.scrollY > 50) nav.current.classList.add("header-scroll")
        else nav.current.classList.remove("header-scroll")
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollFun);
    }, [])

    return (
        <header id="header" ref = {nav}>
            <div className="container">
                <div className="content">
                    <div className="logo">
                        A .Patel
                    </div>
                    <nav>
                        {
                            navData.map(link => (
                                <Link
                                    activeClass="active"
                                    className="link"
                                    key={link.id}
                                    to={link.to}
                                    offset={link.offset}>{link.name}</Link>
                            ))
                        }
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Navbar
