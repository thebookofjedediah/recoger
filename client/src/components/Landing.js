import React from "react";

const Landing = () => (
  <div className="entire-landing">
    <section className="landing-photo">
      <img
        src="/assets/images/landing-background.jpg"
        alt="desk and payments photo"
        className="landing-image"
      />
      <div className="hero">
        <h1 className="hero-title">Welcome to Recoger</h1>
        <p className="hero-description">A new way to manage group payments</p>
      </div>
    </section>
  </div>
);

export default Landing;
