import React, { useState } from 'react';
import './CPSCarouselProduct.css';

const testimonials = [
  {
    quote: "It has been amazing. We do more, and we do it faster. We’ve been able to handle about 80 more projects per quarter. That’s a 20% increase in workload that we can take on because of Beelinx.",
    author: 'Sean Amster, Project Manager, House of Design',
    
    
    image: 'BeelinxHomepageCarousel1.png',
    logo: 'path/to/texas-rangers-logo.png',
  },
  {
    quote: "Beelinx has saved us about 2 hours per week per employee for a total of 16,600 hours over the past 3 years. We estimate this to be over $830,000 in cost savings/increased productivity.",
    author: 'Jane Doe, Creative Director at XYZ Agency',
    
    
    image: 'BeelinxHomepageCarousel2.png',
    logo: 'path/to/xyz-agency-logo.png',
  },
  // Add more testimonials as needed
];

const CPSCarouselProductSolution = () => {
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

export default CPSCarouselProductSolution;
