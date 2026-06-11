import React from "react";
import Form from "./Form";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="ct-root mb-4">
      {/* Header */}
      <div className="ct-head">
        <div className="sp-tag">
          <span className="sp-tag-line" />
          <span className="sp-tag-diamond" />
          Get in touch
          <span className="sp-tag-diamond" />
          <span className="sp-tag-line" />
        </div>
        <h1 className="hero-title">
          Contact<em> Me</em>
        </h1>
        <p className="ct-desc">
          Schedule a consultation and discover the possibilities for your transformation. Let's create a plan tailored
          just for you.
        </p>
      </div>

      {/* Two-column grid */}
      <div className="ct-grid">
        {/* Info side */}
        <div className="ct-info">
          <div>
            <span className="ct-info-label">Email</span>
            <div className="ct-info-val">
              <i className="fa-solid fa-envelope" aria-hidden="true" />
              dr.shizanaeem36@gmail.com
            </div>
          </div>

          <div>
            <span className="ct-info-label">Phone</span>
            <div className="ct-info-val">
              <i className="fa-solid fa-phone" aria-hidden="true" />
              0339-0100389
            </div>
          </div>

          <div>
            <span className="ct-info-label">Location</span>
            <div className="ct-info-val">
              <i className="fa-solid fa-location-dot" aria-hidden="true" />
              Lahore, Pakistan
            </div>
          </div>

          <p className="ct-note">"Enhancing beauty, restoring confidence."</p>
        </div>

        {/* Form side */}
        <Form />
      </div>
    </section>
  );
};

export default Contact;
