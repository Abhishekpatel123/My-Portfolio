import React from 'react'
import './footer.css'
import { FiSmartphone } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'
import { GrLocation } from 'react-icons/gr'
import videoLogo from '../../../assets/video/_Logo.mp4';
import Logo from '../../../utils/Logo/Logo'

function Footer() {
    return (
        <>
            <div className="social">
                <div className="container social_content" >
                    <div>
                        <FiSmartphone />
                        <p>+91 871976xxxx</p>
                    </div>
                    <div>
                        <HiOutlineMail />
                        <p>support@a.patel.com</p>
                        <p>enquiry@a.patel.com</p>

                    </div>
                    <div>
                        <GrLocation />
                        <p>No 5, North street ,</p>
                        <p> Indore ,Madhya pradesh ,india </p>

                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="container footer_content" >
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
                        <GrLocation />
                        <GrLocation />
                        <GrLocation />
                        <GrLocation />

                    </div>
                </div>
            </div>

            <div className="copyright">
                <div className="container copyright_content" >
                    <p>© 2021 copyright all right reserved</p>
                </div>
            </div>
        </>
    )
}

export default Footer
