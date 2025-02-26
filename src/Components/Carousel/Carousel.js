import React, { useState } from 'react';
import './Carousel.css';

const testimonials = [
  {
    quote: "Beelinx's API solutions have revolutionized our payment processes.",
    author: 'XYZ Bank',
    stat: 'Customer Testimonials',
    description: 'See what our clients are saying about Beelinx.',
    image: 'Testimonial 1.png',
    logo: 'path/to/texas-rangers-logo.png',
  },
  {
    quote: "The integration was seamless, and the support team was fantastic.",
    author: 'ABC FinTech',
    stat: 'Customer Testimonials',
    description: 'See what our clients are saying about Beelinx',
    image: 'Testimonial 1.png',
    logo: 'path/to/xyz-agency-logo.png',
  },
  {
    quote: "Beelinx's products have significantly improved our operational efficiency.",
    author: 'DEF E-Commerce',
    stat: 'Customer Testimonials',
    description: 'See what our clients are saying about Beelinx.',
    image: 'Testimonial 1.png',
    logo: 'path/to/texas-rangers-logo.png',
  },
  // Add more testimonials as needed
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1
    );
  };

  return (
    <div>
        <h2 style={{textAlign:'center', fontSize:"50px", margin:30}}>Testimonials</h2>
    <div className="carousel">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className={`carousel-slide ${
            index === currentSlide ? 'active' : ''
          }`}
        >
          <div className="text-section">
            <h2 style={{paddingLeft:"40px"}}>{testimonial.stat}</h2>
            <p style={{paddingLeft:"40px"}} className="description">{testimonial.description}</p>
            <blockquote >"{testimonial.quote}"</blockquote>
            <p style={{padding:"30px"}} className="author">{testimonial.author}</p>
            {/* <img src={testimonial.logo} alt="Logo" className="logo" /> */}
            <div className="actions">
              {/* <button className="video-button">Watch video</button> */}
              {/* <button className="read-more">Read more →</button> */}
            </div>
          </div>
          <div className="image-section">
            <img src={testimonial.image} alt="Visual" />
          </div>
        </div>
      ))}
      <button className="prev-button" onClick={handlePrev}>
        &#10094;
      </button>
      <button className="next-button" onClick={handleNext}>
        &#10095;
      </button>
    </div>
    </div>
  );
};

export default Carousel;
