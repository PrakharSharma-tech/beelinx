import React, { useState } from "react";
import styled from "styled-components";

// Testimonials data
const testimonials = [
  {
    quote:
      "I'm thankful for Beelinx. It's a fast-paced world, and we're all trying to keep up. Beelinx helps me do just that.",
    author: "Kyle Bartlett, Director of Marketing and Advertising at the Texas Rangers",
    stat: "1.2M+",
    description: "square feet of space filled with Rangers branding with Beelinx",
    image: "BeelinxHomepageCarousel1.png",
    logo: "path/to/texas-rangers-logo.png",
  },
  {
    quote: "Beelinx enables our team to handle large-scale projects with unmatched efficiency.",
    author: "Jane Doe, Creative Director at XYZ Agency",
    stat: "5K+",
    description: "campaigns managed seamlessly through Beelinx",
    image: "BeelinxHomepageCarousel2.png",
    logo: "path/to/xyz-agency-logo.png",
  },
];

// Styled components
const CarouselContainer = styled.div`
  margin: -30px auto 50px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin: 30px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Carousel = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  margin: 0 20px;
  background-color: #e1f3ed;
  border-radius: 10px;
  height: auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Slide = styled.div`
  display: ${(props) => (props.active ? "flex" : "none")};
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 2rem;
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 1rem;
  }
`;

const TextSection = styled.div`
  flex: 1;
  max-width: 50%;
  text-align: left;

  h2 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 2rem;
      text-align: center;
    }

    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }

  .description {
    font-size: 1rem;
    color: #6b7280;
    margin-bottom: 1.5rem;

    @media (max-width: 480px) {
      font-size: 0.875rem;
    }
  }

  blockquote {
    font-size: 1.5rem;
    font-style: italic;
    margin-bottom: 1rem;

    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }

  .author {
    font-size: 1rem;
    color: #6b7280;

    @media (max-width: 480px) {
      font-size: 0.875rem;
    }
  }

  .logo {
    margin-top: 1rem;
    width: 50px;

    @media (max-width: 480px) {
      width: 35px;
    }
  }
`;

const ImageSection = styled.div`
  flex: 1;
  img {
    max-width: 100%;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 2rem;
  color: #6b7280;
  cursor: pointer;

  &:hover {
    color: #2563eb;
  }

  ${({ direction }) => (direction === "prev" ? "left: 10px;" : "right: 10px;")}

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

// Main Component
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
    <CarouselContainer>
      <Title>World-class customer stories</Title>
      <Carousel>
        {testimonials.map((testimonial, index) => (
          <Slide key={index} active={index === currentSlide}>
            <TextSection>
              <h2>{testimonial.stat}</h2>
              <p className="description">{testimonial.description}</p>
              <blockquote>"{testimonial.quote}"</blockquote>
              <p className="author">{testimonial.author}</p>
              <img src={testimonial.logo} alt="Logo" className="logo" />
            </TextSection>
            <ImageSection>
              <img src={testimonial.image} alt="Visual" />
            </ImageSection>
          </Slide>
        ))}
        <NavigationButton direction="prev" onClick={handlePrev}>
          &#10094;
        </NavigationButton>
        <NavigationButton direction="next" onClick={handleNext}>
          &#10095;
        </NavigationButton>
      </Carousel>
    </CarouselContainer>
  );
};

export default EnterprisesCarousel;
