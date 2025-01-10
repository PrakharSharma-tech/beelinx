import React from "react";
import "./FormSectionEnterprises.css";

const FormSectionEnterprises = () => {
  return (
    <div style={{ height:"800px"}}>
    <div style={{backgroundColor:"white" }} className="form-section">
      <div    className="form-section-left">
        <h2 >Experience the Beelinx difference</h2>
        <p >
        Explore the potential of Beelinx and discover how our platform can help empower your teams to do their best work together.
        </p>
        <ul>
          <li >Securely connect tools and workflows</li>
          <li >Drive maximum business outcomes</li>
          <li >Attain 360-degree visibility and alignment</li>
        </ul>

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
              What department do you work in?
            </option>
            <option value="Marketing">Marketing</option>
            <option value="IT">IT</option>
            <option value="Finance">Finance</option>
          </select>

          <select required>
            <option value="" disabled selected>
              What is your job level?
            </option>
            <option value="Entry">Entry Level</option>
            <option value="Manager">Manager</option>
            <option value="Executive">Executive</option>
           
          </select>
            <div><p style={{color:"white"}}>By completing and submitting the form, I acknowledge Beelinx’s Privacy Policy</p>
          <button type="submit">Get in touch</button></div>
        </form>
      </div>
      
    </div>
    
    </div>
  );
};

export default FormSectionEnterprises;
