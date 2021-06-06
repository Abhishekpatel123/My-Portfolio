import React from 'react'
import './LandingPage.css'
import Navbar from '../components/navbar/Navbar';
import Banner from '../components/landingpage/banner/Banner';
import Skills from '../components/landingpage/skills/Skills';
import Languages from '../components/landingpage/languages/Languages';
import Feedback from '../components/landingpage/feedback/Feedback';
// import Service from '../components/Service/Service';
// import Blog from '../components/Blog/Blog';
// import Skills from '../components/Skills/Skills';
// import Feedback from '../components/FeedBack/Feedback';
// import Footer from '../components/Footer/Footer';

function Home() {
    return (
        <>
            <Navbar />
            <Banner />
            <Languages />
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
