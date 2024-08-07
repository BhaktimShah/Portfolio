import React from "react";

export const ScrollDown = () => {

   const scrollToBottom = () => {
     window.scrollTo({
       top: document.documentElement.scrollHeight,
       behavior: "smooth",
     });
   };


  return (
    <div>
      <div className="home__skills">
        <p>Tech Stack</p>
        <div className="logos">
          <ul>
            <li>
              <img
                src="https://skillicons.dev/icons?i=html,css"
                alt="skill-icon"
              />
            </li>
            <li>
              <img
                src="https://skillicons.dev/icons?i=js,jquery"
                alt="skill-icon"
              />
            </li>
            <li>
              <img
                src="https://skillicons.dev/icons?i=react,bootstrap"
                alt="skill-icon"
              />
            </li>
            <li>
              <img
                src="https://skillicons.dev/icons?i=photoshop,figma"
                alt="skill-icon"
              />
            </li>
          </ul>
        </div>
      </div>

      <div className="home__scroll">
        <a
          href="#/"
          className="home__scroll-button button--flex"
          onClick={scrollToBottom}
        >
          <svg
            width="32px"
            height="32px"
            className="home__scroll-mouse"
            viewBox="0 0 247 390"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            style={{
              fillRule: "evenodd",
              clipRule: "evenodd",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokemiterlimit: "1.5",
            }}
          >
            <path
              className="wheel"
              d="M123.359,79.775l0,72.843"
              style={{
                fill: "none",
                stroke: "var(--title-color)",
                strokeWidth: "20px",
              }}
            ></path>
            <path
              id="mouse"
              d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
              style={{
                fill: "none",
                stroke: " var(--title-color)",
                strokeWidth: "20px",
              }}
            ></path>
          </svg>
          <span className="home__scroll-name">Scroll Down</span>
          <i className="uil uil-arrow-down home__scroll-arrow"></i>
        </a>
      </div>
    </div>
  );
};

export default ScrollDown;
