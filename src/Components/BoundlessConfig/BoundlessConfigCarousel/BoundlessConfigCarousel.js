import React, { useState } from 'react';
import './BoundlessConfigCarousel.css';

const testimonials = [
  {
    quote: "I’ve never seen a platform as , as easy to onboard new users, as easy to scale, and as easy to customize to your own workflow, process, team, clientele, and changing environment.",
    author: 'Kyle Bartlett, Director of Marketing and Advertising at the Texas Rangers',
    stat: '40%',
    
    image: 'BeelinxHomepageCarousel1.png',
    logo: 'path/to/texas-rangers-logo.png',
  },
  {
    quote: "The way I’m able to customize Beelinx to fit my workflow is one of the strongest features.",
    author: 'Jane Doe, Creative Director at XYZ Agency',
    stat: '90%',
   
    image: 'BeelinxHomepageCarousel2.png',
    logo: 'path/to/xyz-agency-logo.png',
  },
  // Add more testimonials as needed
];

const BoundlessConfigCarousel = () => {
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
        <h2 style={{textAlign:'center', fontSize:"50px", margin:30}}>Stories from our customers</h2>
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

export default BoundlessConfigCarousel;
