import React from "react";
import styled from "styled-components";

// Styled-components for the Hero section and Footer
const HeroSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  background-color: #ffffff;
  color: #000000;
  font-family: Arial, sans-serif;
  height: 500px;
  margin-bottom: 60px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 20px;
    margin-bottom: 80px; /* Increased margin to prevent overlap */
  }
  
  @media (max-width: 1024px) {
    flex-direction: column;
    height: auto;
    padding: 30px;
    margin-bottom: 80px;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 120px;
  }
`;

const HeroContent = styled.div`
  max-width: 50%;
  text-align: left;
  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
  }
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-align: left;
  span {
    color: #43d382;
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 15px;
  }

  @media (max-width: 1024px) {
    font-size: 2rem;
    margin-bottom: 20px;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.1rem;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  
  @media (max-width: 1024px) {
    font-size: 1.1rem;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: row;
justify-content: left;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  
  &.try-button {
    background-color: #43d382;
    color: #fff;
  }
  
  &.contact-button {
    background-color: transparent;
    color: #43d382;
    border: 1px solid #43d382;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    padding: 8px 12px;
  }
`;

const HeroImage = styled.div`
  position: relative;
  width: 45%;
  
  img.main-image {
    width: 100%;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
    text-align: center;
  }
`;

const ConfidenceFooter = styled.div`
  padding: 40px 20px;
  text-align: center;
  background-color: #f8f8f8;
`;

const ConfidenceTitle = styled.p`
  font-size: 40px;
  margin-bottom: 40px;
`;

const Logos = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const LogoImage = styled.img`
  width: 100px;
  height: auto;
  object-fit: contain;

  @media (max-width: 480px) {
    width: 80px;
  }
`;

const BoundlessConfigHeroSection = () => {
  return (
    <div>
      <HeroSection>
        <HeroContent>
          <HeroTitle>
            Streamline Your Business with <span>Beelinx Managed Services</span>
          </HeroTitle>
          <HeroDescription>
            Beelinx’s managed services ensure seamless operations, from consulting to API development and support, driving digital transformation.
          </HeroDescription>
          <HeroButtons>
            <Button className="try-button">Try Beelinx for free</Button>
            <Button className="contact-button">Contact sales</Button>
          </HeroButtons>
        </HeroContent>
        <HeroImage>
          <img
            src="hero-boundlessconfig.png"
            alt="Enterprise collaboration"
            className="main-image"
          />
        </HeroImage>
      </HeroSection>

      <ConfidenceFooter>
        <ConfidenceTitle>
          Trusted by 20,000+ organizations worldwide
        </ConfidenceTitle>
        <Logos>
          <LogoImage src="brand1Beelinx.svg" alt="ABB" />
          <LogoImage src="brand2Beelinx.svg" alt="AVEVA" />
          <LogoImage src="brand3Beelinx.svg" alt="Lyft" />
          <LogoImage src="brand4Beelinx.svg" alt="Siemens" />
          <LogoImage src="brand5Beelinx.svg" alt="Schneider Electric" />
          <LogoImage src="brand6Beelinx.svg" alt="Ogilvy" />
          <LogoImage src="brand7Beelinx.svg" alt="T-Mobile" />
        </Logos>
      </ConfidenceFooter>
    </div>
  );
};

export default BoundlessConfigHeroSection;
