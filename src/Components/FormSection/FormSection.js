import React from "react";
import styled from "styled-components";

// Styled Components

// Form Section Container
const FormSectionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  padding: 50px;
  background-color: #ffffff;
  align-items: flex-start;
  justify-content: center;
  height: auto;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 15px;
    padding: 10px;

   
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
    padding: 20px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 40px;
    padding: 40px;
  }

  @media (max-width: 1200px) {
    flex-direction: row;
    gap: 50px;
    padding: 50px;
  }
`;

// Left Section (Contact Info)
const FormSectionLeft = styled.div`
  flex: 1;
  max-width: 500px;
  text-align: center;

  @media (max-width: 480px) {
    text-align: center;
    max-width: 100%;
    img {
    margin-left: -50px; /* Shift image to the left */
    width:400px;
  }
  }
`;

// Left Section Title
const FormSectionLeftTitle = styled.h2`
  font-size: 3rem;
  color: #1e2b39;
  margin-bottom: 20px;
  text-align: left;

  @media (max-width: 480px) {
    font-size: 1.8rem;
    text-align: center;
  }

  @media (max-width: 600px) {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 1024px) {
    font-size: 2.8rem;
  }
`;

// Left Section Description
const FormSectionLeftDescription = styled.p`
  font-size: 1.1rem;
  color: #6b7c8a;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 10px;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 1.05rem;
  }
`;

// Left Section List
const FormSectionLeftList = styled.ul`
  list-style-type: none;
  padding: 0;
  text-align: left;
  margin: 0 auto;
  max-width: 90%;

  @media (max-width: 600px) {
    text-align: left;
  }

  @media (max-width: 768px) {
    text-align: left;
  }
`;

// Left Section List Item
const FormSectionLeftListItem = styled.li`
  font-size: 1rem;
  color: #6b7c8a;
  margin-bottom: 15px;
  display: flex;
  align-items: center;

  &::before {
    content: "✔";
    color: #32a852;
    margin-right: 10px;
  }
`;

// Right Section (Form)
const FormSectionRight = styled.div`
  flex: 1;
  max-width: 400px;
  height: auto;

  @media (max-width: 480px) {
    max-width: 100%;
    margin-bottom: 30px;
  }

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

// Form Fields
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: auto;

  @media (max-width: 480px) {
    gap: 15px;
  }

  @media (max-width: 600px) {
    gap: 15px;
  }
`;

// Form Input Fields
const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #d1d1d1;
  border-radius: 5px;
  color: #333;

  &:focus {
    outline: 2px solid #32a852;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

// Form Select Dropdown
const Select = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #d1d1d1;
  border-radius: 5px;
  color: #333;

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

// Form Textarea
const Textarea = styled.textarea`
  padding: 20px;
  font-size: 16px;
  width: 100%;
  height: 150px;  // Set a fixed height to prevent it from being too long
  resize: vertical;
  border-radius: 5px;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    font-size: 0.85rem;
    padding: 15px;
    height: 120px;  // Adjust the height for smaller screens
  }

  @media (max-width: 600px) {
    font-size: 0.9rem;
    height: 130px;  // Slightly increased height for better usability on medium mobile screens
  }
`;

// Submit Button
const SubmitButton = styled.button`
  background-color: #32a852;
  color: #fff;
  font-size: 1.1rem;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #288f42;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    padding: 8px 12px;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
    padding: 10px 15px;
  }
`;

// Confidence Footer
const ConfidenceFooter = styled.div`
  text-align: center;
  margin-top: 100px;

  @media (max-width: 600px) {
    margin-top: 200px;
  }
`;

const ConfidenceFooterText = styled.p`
  font-size: 40px;
  padding-bottom: 40px;

  @media (max-width: 600px) {
    font-size: 30px;
  }
`;

const Logos = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;

  img {
    width: 100px;
    height: auto;
  }
`;

const FormSection = () => {
  return (
    <div>
      <FormSectionContainer>
        <FormSectionLeft>
          <FormSectionLeftTitle>Contact Beelinx</FormSectionLeftTitle>
          <FormSectionLeftDescription>
            You can also contact us using the form below. Please provide detailed information so our team can assist you more effectively and address your needs promptly.
          </FormSectionLeftDescription>
          <FormSectionLeftList>
            <FormSectionLeftListItem>Share your query or issue.</FormSectionLeftListItem>
            <FormSectionLeftListItem>Include relevant details for assistance.</FormSectionLeftListItem>
            <FormSectionLeftListItem>Inquire about products or partnerships.</FormSectionLeftListItem>
          </FormSectionLeftList>
          <img
            src="/Contact sales image form.png"
            alt="Illustration related to Beelinx"
            className="form-section-image"
          />
        </FormSectionLeft>

        <FormSectionRight>
          <Form>
            <Input type="text" placeholder="Full name" required />
            <Input type="email" placeholder="Email" required />
            <Input type="tel" placeholder="Phone" required />
            <Select required>
              <option value="" disabled selected>
                Subject
              </option>
              <option value="Marketing">General Inquiry</option>
              <option value="IT">Sales Inquiry</option>
              <option value="Finance">Technical Support</option>
              <option value="Finance">Partnership Opportunity</option>
              <option value="Finance">Other</option>
            </Select>
            <Textarea rows="80" placeholder="Your message here" />
            <SubmitButton type="submit">Get in touch</SubmitButton>
          </Form>
        </FormSectionRight>
      </FormSectionContainer>

      <ConfidenceFooter>
        <ConfidenceFooterText>Trusted by 20,000+ organizations worldwide</ConfidenceFooterText>
        <Logos>
          <img src="brand1Beelinx.svg" alt="ABB" />
          <img src="brand2Beelinx.svg" alt="AVEVA" />
          <img src="brand3Beelinx.svg" alt="Lyft" />
          <img src="brand4Beelinx.svg" alt="Siemens" />
          <img src="brand5Beelinx.svg" alt="Schneider Electric" />
          <img src="brand6Beelinx.svg" alt="Ogilvy" />
          <img src="brand7Beelinx.svg" alt="T-Mobile" />
        </Logos>
      </ConfidenceFooter>
    </div>
  );
};

export default FormSection;
