import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";

const services = [
  {
    num: "01",
    image: "/images/s1.jpg",
    title: "Facelift",
    desc: "Reduces visible signs of aging by tightening skin and underlying tissues to smooth wrinkles, lift sagging skin, and restore a more youthful appearance.",
  },
  {
    num: "02",
    image: "/images/s2.jpg",
    title: "Rhinoplasty",
    desc: "Reshapes the nose to improve its appearance or function — one of the most popular cosmetic surgeries worldwide, tailored to each individual.",
  },
  {
    num: "03",
    image: "/images/s3.jpg",
    title: "Blepharoplasty",
    desc: "Removes excess skin, fat, or muscle from the eyelids to address drooping and puffiness, improving both appearance and eyelid function.",
  },
];

const Services = () => {
  return (
    <section id="services" className="sv-root">
      {/* Header */}
      <div className="sv-head">
        <div className="sp-tag">
          <span className="sp-tag-line" />
          <span className="sp-tag-diamond" />
          What I can do for you
          <span className="sp-tag-diamond" />
          <span className="sp-tag-line" />
        </div>
        <h1 className="hero-title">
          Our<em> Services</em>
        </h1>
        <p className="sv-desc">
          Dedicated to enhancing your natural beauty and boosting your confidence through personalized plastic surgery
          services.
        </p>
      </div>

      {/* Cards grid */}
      <div className="container-fluid px-0">
        <div className="sv-grid">
          {services.map((s) => (
            <div className="sv-card" key={s.num}>
              <div className="sv-card-pattern" />
              <div className="sv-card-accent" />
              <div className="sv-card-inner">
                <img src={process.env.PUBLIC_URL + s.image} alt={s.title} className="sv-img" />
                <div className="sv-body">
                  <span className="sv-num">{s.num}</span>
                  <h3 className="sv-name">{s.title}</h3>
                  <p className="sv-text">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="sv-foot">
        <Link className="sv-btn" to="/services">
          View all services
          <i className="fa-solid fa-arrow-right" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
};

export default Services;
