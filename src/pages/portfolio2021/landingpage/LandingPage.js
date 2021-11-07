import React, { useEffect } from "react";
import { Fade } from "react-reveal";
import "./stylesheet.css";
import {
  About,
  Banner,
  Contact,
  Experience,
  Footer,
  Interest,
  Languages,
  Navbar,
  Project,
} from "components/portfolio2021/landingpage";
import staticData from "data/staticData";

function Home({ inactive }) {
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
    <div>
      <Navbar inactive={inactive} />
      <main className={`allContent container `}>
        <Banner />

        <div className="data_in_number">
          <Fade>
            <div className="container">
              <div className="content">
                <hr />
                <div className="data_container">
                  {staticData.data_in_number.map(({ number, title }, idx) => (
                    <div>
                      <h2 style={{ textAlign: "center", margin: ".5rem 0" }}>
                        {number}
                      </h2>
                      <h5 style={{ color: "gray" }}>{title}</h5>
                    </div>
                  ))}
                </div>
                <hr />
              </div>
            </div>
          </Fade>
        </div>
        <About />
        <Languages />
        <Project />
        <Interest />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default Home;
