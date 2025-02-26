import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com"; // Import EmailJS

// Styled Components (same as before)
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
`;

const FormSectionLeft = styled.div`
  flex: 1;
  max-width: 500px;
  text-align: center;
`;

const FormSectionLeftTitle = styled.h2`
  font-size: 3rem;
  color: #1e2b39;
  margin-bottom: 20px;
  text-align: left;

  @media (max-width: 480px) {
    font-size: 1.8rem;
    text-align: center;
  }
`;

const FormSectionLeftDescription = styled.p`
  font-size: 1.1rem;
  color: #6b7c8a;
  margin-bottom: 20px;
`;

const FormSectionLeftList = styled.ul`
  list-style-type: none;
  padding: 0;
  text-align: left;
  margin: 0 auto;
  max-width: 90%;
`;

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

const FormSectionRight = styled.div`
  flex: 1;
  max-width: 400px;
  height: auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: auto;
`;

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
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #d1d1d1;
  border-radius: 5px;
  color: #333;
`;

const Textarea = styled.textarea`
  padding: 20px;
  font-size: 16px;
  width: 100%;
  height: 150px;
  resize: vertical;
  border-radius: 5px;
  margin-bottom: 20px;
`;

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
`;

const ConfidenceFooter = styled.div`
  text-align: center;
  margin-top: 100px;
`;

const ConfidenceFooterText = styled.p`
  font-size: 40px;
  padding-bottom: 40px;
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

// Main FormSection Component
const FormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // To show form submission status

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission using EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!formData.name || !formData.email || !formData.phone || !formData.subject || !formData.message) {
      setStatus("All fields are required.");
      return;
    }

    // Use EmailJS to send the email
    emailjs
      .send(
        "service_ve05s78",  // Your EmailJS service ID
        "template_t1mezni",  // Your EmailJS template ID
        formData,            // Form data to be sent
        "KgC3sA3uE4lPnevgl"       // Your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.error(error.text);
          setStatus("Error sending message. Please try again later.");
        }
      );
  };

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
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Full name"
              onChange={handleChange}
              required
            />
            <Input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Email"
              onChange={handleChange}
              required
            />
            <Input
              type="tel"
              name="phone"
              value={formData.phone}
              placeholder="Phone"
              onChange={handleChange}
              required
            />
            <Select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Subject
              </option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Sales Inquiry">Sales Inquiry</option>
              <option value="Technical Support">Technical Support</option>
              <option value="Partnership Opportunity">Partnership Opportunity</option>
            </Select>
            <Textarea
              name="message"
              value={formData.message}
              placeholder="Your message"
              onChange={handleChange}
              required
            ></Textarea>
            <SubmitButton type="submit">Send Message</SubmitButton>
          </Form>
          {status && <p>{status}</p>} {/* Display status */}
        </FormSectionRight>
      </FormSectionContainer>

      {/* <ConfidenceFooter>
        <ConfidenceFooterText>Confidence in Beelinx</ConfidenceFooterText>
        <Logos>
          <img src="/Logo1.png" alt="Logo1" />
          <img src="/Logo2.png" alt="Logo2" />
        </Logos>
      </ConfidenceFooter> */}
    </div>
  );
};

export default FormSection;
