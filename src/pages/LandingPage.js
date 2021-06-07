import React, { useState } from 'react'
import './LandingPage.css'
import Navbar from '../components/navbar/Navbar';
import Banner from '../components/landingpage/banner/Banner';
import Skills from '../components/landingpage/skills/Skills';
import Languages from '../components/landingpage/languages/Languages';
import Feedback from '../components/landingpage/feedback/Feedback';
import Projects from '../components/landingpage/projects/Projects';
// import Service from '../components/Service/Service';
// import Blog from '../components/Blog/Blog';
// import Skills from '../components/Skills/Skills';
// import Feedback from '../components/FeedBack/Feedback';
// import Footer from '../components/Footer/Footer';

function Home() {


    const [developer, setDeveloper] = useState("MERN STACK DEVELOPER");
    const skills = [
        "MERN STACK DEVELOPER",
        "APP DEVELOPER"
    ]
    return (
        <>
            <Navbar />
            {/* <section className="main">
                <div className="container">
                    <div className="main_content">
                        <h4>Hi there 👋, my name is Abhishek Patel</h4>
                        <h1>MERN STACK DEVELOPER</h1>
                    </div>
                </div>
            </section> */}
            <Banner />
            <Languages />
            <Projects />
            <Skills />
            <Feedback />
        </>
        // {/* <Service /> */}
        // {/* <Skills /> */}
        // {/* <Blog /> */}
        // {/* <Feedback /> */}
        // {/* <Footer /> */}
    )
}

export default Home
