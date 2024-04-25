import React from "react";
import "./home.css";
import Social from './Social';
import Data from './Data';
import ScrollDown  from "./ScrollDown";


const Home = () => {
    return (
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__content grid">
            <Social />
            <div className="home__img">
              <p className="home__data1 home__data-one">
                <span className="text-lg">
                  12 <b> + </b>
                </span>
                <span className="text-sm text-cs">
                  Years of <span>Experience</span>
                </span>
              </p>

              <p className="home__data1 home__data-two">
                <span className="text-lg">
                  14 <b> + </b>
                </span>
                <span className="text-sm text-cs">
                  Completed <span>Projects</span>
                </span>
              </p>
            </div>

            <Data />
          </div>
          <ScrollDown />
        </div>
      </section>
    );
};

export default Home;