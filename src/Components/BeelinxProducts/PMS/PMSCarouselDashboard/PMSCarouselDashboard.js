import React, { useState } from 'react';
import './PMSCarouselDashboard.css';

const testimonials = [
  {
    quote: "Dashboards eliminated a lot of the stress and time spent trying to pull summaries of what everyone was working on. We start every week using our dashboards — it sets the bar for what we must prioritize.",
    author: 'Kyle Bartlett, Director of Marketing and Advertising at the Texas Rangers',
   
    image: 'BeelinxHomepageCarousel1.png',
    
  },
  {
    quote: "Beelinx offers some helpful, out-of-the-box features that are essential for enterprise use. We set up the dashboards so collaboration and task management work best across functional teams in branches. team to handle large-scale projects with unmatched efficiency.",
    author: 'Jane Doe, Creative Director at XYZ Agency',
    
    image: 'BeelinxHomepageCarousel2.png',
    
  },
  // Add more testimonials as needed
];

const PMSCarouselDashboard = () => {
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
        <h2 style={{textAlign:'center', fontSize:"50px", margin:30}}>Over 2.3 million users choose Beelinx</h2>
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

export default PMSCarouselDashboard;
