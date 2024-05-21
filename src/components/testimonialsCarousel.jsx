import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import { testimonials } from '../assets/testimonials.js';

const allTestimonials = testimonials;

function CustomSlide({ singleTestimonial }) {
  return (
    <>
      <div className="single-testimonial">
        <div className="card-top">
          {singleTestimonial.img ? (
            <img src={singleTestimonial.img} alt="" />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              fill="currentColor"
              className="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path
                fillRule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
              />
            </svg>
          )}
          <div className="full-name">
            <h3 className="first-name">{singleTestimonial.firstName}</h3>
            <p className="custom-field">{singleTestimonial.customField ? singleTestimonial.customField : ''}</p>
          </div>
        </div>
        <div className="card-body">
          <h2 className="title">{singleTestimonial.title}</h2>
          <p className="text">{singleTestimonial.text}</p>
        </div>
      </div>
    </>
  );
}

export default function TestimonialCarousel() {
  var settings = {
    dots: true,
    infinite: true,
    fade: false,
    waitForAnimate: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {allTestimonials.map((t, index) => (
          <CustomSlide singleTestimonial={t} key={index} />
        ))}
      </Slider>
    </>
  );
}
