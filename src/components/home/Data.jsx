import React from "react";
import CV from "../../assets/BhaktiShahResume.pdf";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">Bhakti Shah</h1>
      <h3 className="home__subtitle">UI / Frontend Developer</h3>
      <p className="home_description">
        I'm creative designer based in India, and I'm very passionate and
        dedicated to my work. I believe that continuous learning is the key to success and i'm always on the lookout for fresh challenges to keep me motivated and engaged.
      </p>

      <div className="home__btns">
        <a href={CV} download="" className="btn text-cs">
          Download CV
        </a>

        <a href="" className="hero__link text-cs">
          My Skills
        </a>
      </div>
    </div>
  );
};

export default Data;
