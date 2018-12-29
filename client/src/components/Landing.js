import React from "react";

const Landing = () => (
  <div className="entire-landing">
    <section className="landing-photo">
      <img
        src="/assets/images/landing-background.jpg"
        alt="guy with headphones"
        className="landing-image"
      />
    </section>

    <section className="landing-buttons">
      <button type="button" class="btn btn-success">
        Sign Up
      </button>
      <button type="button" class="btn btn-success">
        Sign In
      </button>
    </section>
  </div>
);

export default Landing;
