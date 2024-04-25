import React from "react";
import { useState } from "react";
import { Link } from 'react-scroll';
import logoImg from "../../assets/tCreativeLogo.png";
import "./header.css";

export const Header = () => {
  /*=============== Change background header ===============*/
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });
  /*=============== Toggle Menu ===============*/
  const [Toggle, showMenu] = useState(false);
 /* const [activeNav, setActiveNav] = useState("#home");*/
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          <img src={logoImg} alt="logo" />
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          {/* navigatio start */}
          <div className="nav__list">
            <Link
              activeClass="nav__link active-link"
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="nav__item"
            >
              Home
            </Link>

            <Link
              activeClass="nav__link active-link"
              to="services"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="nav__item"
            >
              Services
            </Link>
            <Link
              activeClass="nav__link active-link"
              to="skills"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="nav__item"
            >
              Skills
            </Link>
            <Link
              activeClass="nav__link active-link"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="nav__item"
            >
              Works
            </Link>
            <Link
              activeClass="nav__link active-link"
              to="resume"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="nav__item"
            >
              Resume
            </Link>
         {/*    <Link
              activeClass="nav__link active-link"
              to="testimonials"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="nav__item"
            >
              Testimonials
            </Link> */}
            <Link
              activeClass="nav__link active-link"
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="nav__item"
            >
              Contact
            </Link>
          </div>
          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
