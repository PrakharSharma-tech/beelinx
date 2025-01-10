import React from "react";
import "./FormSection.css";

const FormSection = () => {
  return (
    <div>
      <div style={{ marginTop: "-30px", marginBottom: "70px" }} className="form-section">
        <div className="form-section-left">
          <h2>Contact Beelinx</h2>
          <p>
            You can also contact us using the form below. Please provide detailed information so our team can assist you more effectively and address your needs promptly.
          </p>
          <ul>
            <li>Share your query or issue.</li>
            <li>Include relevant details for assistance.</li>
            <li>Inquire about products or partnerships.</li>
          </ul>

          {/* Image added below the list items */}
          <img 
            src="/Contact sales image form.png" // Update this with the correct image path
            alt="Illustration related to Beelinx" 
            className="form-section-image" 
          />
        </div>

        <div className="form-section-right">
          <form>
            <input type="text" placeholder="Full name" required />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Phone" required />
            <select required>
              <option value="" disabled selected>
                Subject
              </option>
              <option value="Marketing">General Inquiry</option>
              <option value="IT">Sales Inquiry</option>
              <option value="Finance">Technical Support</option>
              <option value="Finance">Partnership Opportunity</option>
              <option value="Finance">Other</option>
            </select>

            {/* Updated long text area */}
            <textarea
              name=""
              rows="80" // Increased the number of rows for height
              style={{
                
                padding:"20px 20px",
                 // Slightly more padding for a better feel
                fontSize: '16px', // Slightly bigger font size for readability
                width: '100%',
                height: '100%', // Fixed height for better control
                resize: 'vertical', // Vertical resizing only
                borderRadius: '5px',
                
                marginBottom: '20px', // Add some space below the text area
              }}
              placeholder=""
            >
             
            </textarea>

            <div>
              <button type="submit">Get in touch</button>
            </div>
          </form>
        </div>
      </div>

      {/* Confidence footer */}
      <div className="confidence-footer">
        <p style={{ fontSize: "40px", paddingBottom: "40px" }}>
          Trusted by 20,000+ organizations worldwide
        </p>
        <div className="logos">
          <img src="brand1Beelinx.svg" alt="ABB" />
          <img src="brand2Beelinx.svg" alt="AVEVA" />
          <img src="brand3Beelinx.svg" alt="Lyft" />
          <img src="brand4Beelinx.svg" alt="Siemens" />
          <img src="brand5Beelinx.svg" alt="Schneider Electric" />
          <img src="brand6Beelinx.svg" alt="Ogilvy" />
          <img src="brand7Beelinx.svg" alt="T-Mobile" />
        </div>
      </div>
    </div>
  );
};

export default FormSection;
