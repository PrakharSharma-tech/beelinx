import React from "react";
import "./collaborate.css";

const Collaborate2024 = () => {
  return (
    <section className="collaborate-section">
      <div className="collaborate-content">
        <p style={{textAlign:"left", paddingBottom:"20px"}}>On demand access</p>
        <h2 className="collaborate-heading">Watch the best of Collaborate 2024!</h2>
        <p className="collaborate-subtext">
          Join us for an inspiring event showcasing the top tools, tips, and strategies for collaboration and productivity.Catch up on our industry’s most exciting event with on-demand access to exclusive insights, inspiring sessions, and hands-on workflow management demos — all to help you do less and achieve more.
        </p>
        <div className="collaborate-stats">
        <div className="stat">
            <h3>2</h3>
            <p>Days</p>
          </div>
          <div className="stat">
            <h3>50+</h3>
            <p>Sessions</p>
          </div>
          <div className="stat">
            <h3>100+</h3>
            <p>Speakers</p>
          </div>
          <div className="stat">
            <h3>10k+</h3>
            <p>Attendees</p>
          </div>
        </div>
        <button className="collaborate-btn">Watch now</button>
      </div>
    </section>
  );
};

export default Collaborate2024;
