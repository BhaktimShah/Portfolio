import React from "react";
import { FaCheck, FaArrowRight } from "react-icons/fa";
import "./pricing.css";

const Pricing = () => {
  return (
    <section className="pricing section" id="pricing">
      <h2 className="section__title text-cs">Pricing</h2>
      <span className="section__subtitle">My Price Board</span>

      <div className="pricing__container container grid">
        <div className="pricing__item card card-one">
          <span className="pricing__subtitle text-cs">Hourly Basis </span>
          <h3 className="pricing__price">
            39 <span>$ </span> <em>Hour</em>
          </h3>
          <p className="pricing__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <ul className="pricing__list">
            <li className="list__item">
              <FaCheck className="list__icon"></FaCheck>
              <span>Brand Design</span>
            </li>

            <li className="list__item">
              <FaCheck className="list__icon"></FaCheck>
              <span>Web Development</span>
            </li>

            <li className="list__item">
              <del>Advertising</del>
            </li>
          </ul>

          <a href="" className="btn pricing__btn text-cs">
            Start Project
            <FaArrowRight className="pricing__btn-icon"></FaArrowRight>
          </a>
        </div>

        <div className="pricing__item card card-one">
          <span className="pricing__subtitle text-cs">Freelancing</span>
          <h3 className="pricing__price">
            259 <span>$ </span> <em>Week</em>
          </h3>
          <p className="pricing__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <ul className="pricing__list">
            <li className="list__item">
              <FaCheck className="list__icon"></FaCheck>
              <span>Brand Design</span>
            </li>

            <li className="list__item">
              <FaCheck className="list__icon"></FaCheck>
              <span>Web Development</span>
            </li>

            <li className="list__item">
              <FaCheck className="list__icon"></FaCheck>
              <span>Advertising</span>
            </li>
          </ul>

          <a href="" className="btn pricing__btn text-cs">
            Start Project
            <FaArrowRight className="pricing__btn-icon"></FaArrowRight>
          </a>
        </div>

        <div className="pricing__item card card-one">
          <span className="pricing__subtitle text-cs">Full Time</span>
          <h3 className="pricing__price">
            1249 <span>$ </span> <em>Month</em>
          </h3>
          <p className="pricing__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <ul className="pricing__list">
            <li className="list__item">
              <FaCheck className="list__icon"></FaCheck>
              <span>Brand Design</span>
            </li>

            <li className="list__item">
              <FaCheck className="list__icon"></FaCheck>
              <span>Web Development</span>
            </li>

            <li className="list__item">
              <FaCheck className="list__icon"></FaCheck>
              <span>Advertising</span>
            </li>
          </ul>

          <a href="" className="btn pricing__btn text-cs">
            Start Project
            <FaArrowRight className="pricing__btn-icon"></FaArrowRight>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
