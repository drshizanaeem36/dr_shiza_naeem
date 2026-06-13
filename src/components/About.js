import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
const About = () => {
  return (
    <section id="about" className="about-root">
      <div className="row g-0 align-items-stretch">
        {/* Image Side */}
        <div className="col-lg-5 col-md-5 p-0 about-image-side">
          <div className="about-img-inner">
            <img src="/images/shizanaeem.jpeg" alt="Dr. Shiza Naeem" width={720} height={1280} />
          </div>
        </div>

        {/* Content Side */}
        <div className="col-lg-7 col-md-7 about-content-side">
          <div className="about-eyebrow">
            {" "}
            <h4>About Me</h4>
          </div>

          <h2 className="about-name">Dr. Shiza Naeem</h2>
          <div className="about-name-rule" />
          <p className="about-bio">
            Consultant plastic surgeon with a distinguished background. Graduated from Army Medical College in
            Rawalpindi and completed specialized training at Children's Hospital, Lahore — with additional rotations at
            Services Hospital and Mayo Hospital.
          </p>

          <div className="about-badges">
            {["Plastic & Reconstructive Surgery", "FCPS Trained", "Children's Hospital"].map((badge) => (
              <span key={badge} className="about-badge">
                {badge}
              </span>
            ))}
          </div>

          <div className="abt-foot">
            <Link className="abt-btn" to="/about">
              Full Details
              <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
