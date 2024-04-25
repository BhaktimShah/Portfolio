import React from "react";

import { testimonials } from "../../Data";
import  testimonialsIcon  from "../../assets/testimonials-icon.svg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./testimonials.css";

// import required modules
import { Pagination } from "swiper/modules";

const Testimonials = () => {
  return (
    <section className="testimonial container section" id="testimonials">
      <h2 className="section__title">My clients say</h2>
      <span className="section__subtitle">Testimonial</span>

      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          540: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="testimonial__container mySwiper"
      >
        {testimonials.map(({ img, name, author, description }, index) => {
          return (
            <SwiperSlide
              className="testimonials__item card card-one"
              key={index}
            >
              <div className="testimonials__header">
                <div className="testimonial__icon">
                  <img src={testimonialsIcon} alt="" />
                </div>

                <img src={img} alt="" className="testimonial__img" />
              </div>
              <p className="testimonial__description">{description}</p>

              <h3 className="testimonial__name">{name}</h3>
              <p className="testimonial__author">{author}</p>


            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
