import React, { useEffect, useState } from "react";
import "./LandingPage.css";
import Navbar from "../components/navbar/Navbar";
import Banner from "../components/landingpage/banner/Banner";
import Languages from "../components/landingpage/languages/Languages";
import Footer from "../components/landingpage/footer/footer";
import Contact from "../components/landingpage/contact/Contact";
import Interest from "../components/landingpage/interest/Interest";
import About from "../components/about/About";
import Project from "../components/project/Project";
import staticData from "../data/staticData";

function Home() {
  let data;

  const observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach((entrie) => {
        if (!entrie.isIntersecting) {
          return;
        }
        console.log(entrie.target);
        var scrolled = window.pageYOffset;

        entrie.target.classList.toggle("data_count_animation");
        observer.unobserve(entrie.target);
      });
    },
    { root: null, threshold: 0.1, rootMargin: "0px 0px -200px 0px" }
  );

  useEffect(() => {
    data = document.querySelector(".data_in_number");
    const allContent = document.querySelector(".allContent");
    let allchild = allContent.querySelectorAll(":scope > *");
    allchild.forEach((ele) => {
      observer.observe(ele);
    });
    return () => {};
  }, []);

  return (
    <>
      <Navbar />
      <main className="allContent">
        <Banner />

        <div className="data_in_number">
          <div className="container">
            <div className="content">
              <hr />
              <div className="data_container">
                {staticData.data_in_number.map(({ number, title }, idx) => (
                  <div>
                    <h1 style={{ textAlign: "center", margin: ".5rem 0" }}>
                      {number}
                    </h1>
                    <h5 style={{ color: "gray" }}>{title}</h5>
                  </div>
                ))}
              </div>
              <hr />
            </div>
          </div>
        </div>
        <About />
        <Languages />
        <Project />
        <Interest />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default Home;
