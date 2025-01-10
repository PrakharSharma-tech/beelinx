import React, { useState } from 'react';
import './Carousel.css';

const testimonials = [
  {
    quote: "I'm thankful for Beelinx. It's a fast-paced world, and we're all trying to keep up. Beelinx helps me do just that.",
    author: 'Kyle Bartlett, Director of Marketing and Advertising at the Texas Rangers',
    stat: '1.2M+',
    description: 'square feet of space filled with Rangers branding with Beelinx',
    image: 'BeelinxHomepageCarousel1.png',
    logo: 'path/to/texas-rangers-logo.png',
  },
  {
    quote: "Beelinx enables our team to handle large-scale projects with unmatched efficiency.",
    author: 'Jane Doe, Creative Director at XYZ Agency',
    stat: '5K+',
    description: 'campaigns managed seamlessly through Beelinx',
    image: 'BeelinxHomepageCarousel2.png',
    logo: 'path/to/xyz-agency-logo.png',
  },
  // Add more testimonials as needed
];

const EnterprisesCarousel = () => {
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
    <div style={{ marginTop:"-30px" , marginBottom:"-50px"}}>
        <h2 style={{textAlign:'center', fontSize:"50px", margin:30}}>World-class customer stories</h2>
    <div className="carousel">
      {testimonials.map((testimonial, index) => (
        <div 
          key={index}
          className={`carousel-slide ${
            index === currentSlide ? 'active' : ''
          }`}
        >
          <div className="text-section">
            <h2>{testimonial.stat}</h2>
            <p className="description">{testimonial.description}</p>
            <blockquote>"{testimonial.quote}"</blockquote>
            <p className="author">{testimonial.author}</p>
            <img src={testimonial.logo} alt="Logo" className="logo" />
            <div className="actions">
              <button className="video-button">Watch video</button>
              <button className="read-more">Read more →</button>
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

export default EnterprisesCarousel;
