import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'
import navData from '../../configs/nav_data'

function Navbar() {
    const header = useRef();
    const nav = useRef();
    const [open, setOpen] = useState(false)

    function scrollFun() {
        if (window.scrollY > 50) header.current.classList.add("header-scroll")
        else header.current.classList.remove("header-scroll")
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollFun);
        return window.removeEventListener('scroll', scrollFun)
    }, [])

    const openSidebar = () => {
        nav.current.classList.toggle('nav_translate') 
    }

    return (
        <header id="header" ref={header}>
            <div className="container">
                <div className="content">
                    <div className="logo">
                        A .Patel
                    </div>
                    <div className="bar" onClick={() => openSidebar()}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <nav ref={nav} className="nav_mobile">
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
                        <button
                            className="link join_me_btn"

                        >Join us</button>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Navbar
