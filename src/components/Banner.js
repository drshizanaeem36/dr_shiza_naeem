import React from "react";
import { Link } from "react-router-dom";
import './Banner.css';

const Banner = () => {
  return (
    <section id="home" className="banner-root" style={{ backgroundImage: "url('/images/banner1.jpeg')" }}>
      <div className="banner-overlay" />

      <div className="banner-content">
       <div className="sp-tag" style={{ marginBottom: "1.5rem", fontSize: "10px", fontWeight: "900" ,fontStyle: "bold"}}>
           Plastic &amp; Reconstructive Surgery
          <span className="sp-tag-diamond" />
          <span className="sp-tag-line" />
        </div>

        <h1 className="banner-heading">
          Enhancing beauty,<br />
          <em>restoring</em> confidence.
        </h1>

        <p className="banner-sub">
          Expert care with a personal touch — from reconstructive
          procedures to aesthetic refinement.
        </p>

        <div className="banner-actions">
          <Link className="banner-btn-primary" to="/contact">
            Book an appointment
            <i className="fa-solid fa-arrow-right" aria-hidden="true" />
          </Link>
  
        </div>
      </div>

    </section>
  );
};

export default Banner;