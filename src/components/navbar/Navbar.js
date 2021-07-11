import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'
import navData from '../../configs/nav_data'
import Logo from '../../utils/Logo/Logo';

function Navbar() {
    const header = useRef();
    const nav = useRef();
    const [navScroll, setNavScroll] = useState(false)
    const [open, setOpen] = useState(false)

    // function scrollFun() {
    //     console.log(window.screenY, window.pageYOffset)

    //     if (window.pageYOffset > 5000) {
    //         setNavScroll(true)
    //         // console.log(window.screenY)
    //         // header.current.classList.add("header-scroll")
    //     } else {
    //         setNavScroll(true)
    //     }
    //     // else header.current.classList.remove("header-scroll")
    // }
    // useEffect(() => {
    //     window.addEventListener('scroll', scrollFun);
    //     return () => {
    //         // return window.removeEventListener('scroll', scrollFun)
    //     }
    // }, [])

    const observer = new IntersectionObserver((entries, observe) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                // after entry we want to change navbar style 
                header.current.classList.add("header-scroll")
            } else {
                header.current.classList.remove("header-scroll")
            }
        })
    }, { rootMargin: '-200px 0px 0px 0px' })
    useEffect(() => {
        const banner = document.querySelector('.banner');
        observer.observe(banner)
    }, [])

    const openSidebar = (e) => {
        const line = document.querySelectorAll('.line')
        setOpen(!open)
        nav.current.classList.toggle('nav_translate')
        console.log(e.target.querySelectorAll('span'))
    }

    return (
        <header id="header" className={navScroll ? 'header-scroll' : 'head'} ref={header}>
            <div className="container">
                <div className="content">
                    <Logo />

                    <div className="bar" onClick={(e) => openSidebar(e)}>
                        <span className={open ? "line" : null}></span>
                        <span className={open ? "line_reverse" : null}></span>
                        {/* <span></span> */}
                    </div>
                    <nav ref={nav} className="nav_mobile">
                        {
                            navData.map(link => (
                                <Link
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    className="link"
                                    key={link.id}
                                    to={link.to}
                                    // offset={link.offset}
                                >
                                    {link.name}
                                </Link>
                            ))
                        }
                        {/* <button className="link join_me_btn">Join us</button> */}
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Navbar
