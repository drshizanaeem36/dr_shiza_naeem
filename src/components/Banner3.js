import React from "react";
import "./Banner3.css";

const Banner3 = () => {
  return (
    <section id="contact" className="banner3-root" style={{ backgroundImage: "url('/images/banner3.jpg')" }}>
      <div className="banner3-overlay" />

      <div className="banner3-content">
        <div className="sp-tag">
          <h1>Contact Me</h1>
          <span className="sp-tag-diamond" />
          <span className="sp-tag-line" />
        </div>
      </div>
    </section>
  );
};

export default Banner3;
