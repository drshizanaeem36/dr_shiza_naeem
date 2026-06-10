import React from "react";
import "./Banner4.css";
const Banner4 = () => {
  return (
    <section id="about" className="banner4-root" style={{ backgroundImage: "url('/images/banner2.jpg')" }}>
      <div className="banner4-overlay" />

      <div className="banner4-content">

          <div className="sp-tag">
          <h1>About Me</h1>
          <span className="sp-tag-diamond" />
          <span className="sp-tag-line" />
        </div>


      </div>

    </section>
  );
};

export default Banner4;
