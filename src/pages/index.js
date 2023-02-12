import React, { useEffect } from 'react';

import './stylesheet.css';
import {
  About,
  Banner,
  // Contact,
  Experience,
  Footer,
  Interest,
  Skills,
  Project,
  Status,
  Achievements,
} from 'components';
import LeftContent from 'components/LeftContent';
import RightContent from 'components/RightContent';
import { Contact } from 'components';

const Portfolio = () => {
  let data;
  const observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.toggle('data_count_animation');
        observer.unobserve(entry.target);
      });
    },
    { root: null, threshold: 0.1, rootMargin: '0px 0px -200px 0px' }
  );

  useEffect(() => {
    data = document.querySelector('.data_in_number');
    const allContent = document.querySelector('.allContent');
    let allchild = allContent.querySelectorAll(':scope > *');
    allchild.forEach((ele) => observer.observe(ele));
  }, []);

  return (
    <div>
      {/* left FIXED CONTAINER */}
      {/* <LeftContent /> */}

      {/* MIDDLE CONTENT CONTAINER */}
      <main
        // style={{ padding: "0 100px" }}
        style={{ padding: "0 10px" }}
        className={`allContent container `}
      >
        <Banner />
        <Status />
        <About />
        <Skills />
        <Interest />
        <Experience />
        <Project />
        {/* <Contact /> */}
        <Achievements />
        <Footer />
      </main>

      {/* RIGHT FIXED CONTAINER */}
      {/* <RightContent /> */}
    </div>
  );
};

export default Portfolio;
