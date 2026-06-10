import React from "react";
import Banner4 from "./Banner4";
import "./AboutPage.css";
/*
  Fonts — add to your index.html <head>:
  
  Font Awesome 6 (already in your project per original code)
*/

const AboutPage = () => {
  return (
    <div>
      <Banner4 />

      <section id="aboutPage" className="about_wrapper2 about-pg">
        <div className="container">
          {/* ── Hero Strip ── */}
          <div className="hero-strip">
            <div className="hero-strip-glow" />
            <div className="hero-strip-pattern" />
            <div className="hero-strip-bottom-rule" />

            <div>
              <div
                className="sp-tag"
                style={{ marginBottom: "1.5rem", fontSize: "10px", fontWeight: "900", fontStyle: "bold" }}>
                Plastic &amp; Reconstructive Surgery
                <span className="sp-tag-diamond" />
                <span className="sp-tag-line" />
              </div>
               <h1 className="hero1-title">
              Dr <em> Shiza Naeem</em>
            </h1>
              <div className="hero-title-rule" />
              <div className="d-flex flex-wrap">
                <span className="hero-badge">
                  <i className="fa-solid fa-building-columns fa-xs"></i>
                  FCPS - Plastic Surgery
                </span>
                <span className="hero-badge">
                  <i className="fa-solid fa-building-columns fa-xs"></i>
                  MBBS · Army Medical College
                </span>
                <span className="hero-badge">Reconstructive and aesthetic surgeon</span>
                <span className="hero-badge">
                  <i className="fa-solid fa-location-dot fa-xs"></i>
                  Lahore, Pakistan
                </span>
              </div>
            </div>

            <div className="initials-circle">SN</div>
          </div>

          {/* ── Education + Image ── */}
          <div className="row align-items-center g-4 mb-5">
            <div className="col-lg-6 mb-4 mb-lg-0 d-flex flex-column justify-content-center">
              <div className="about-eyebrow">
                {" "}
                <h4>Background</h4>
              </div>
              <h2 className="section-heading">Education &amp; Foundation</h2>
              <p className="section-body">
                Dr. Shiza Naeem is a qualified Plastic, Reconstructive, and Aesthetic Surgeon who completed her
                specialized training at some of Lahore's most prestigious tertiary care institutions, including Services
                Hospital Lahore, The Children's Hospital & Institute of Child Health Lahore, and Mayo Hospital Lahore.
                Her training encompassed a broad spectrum of reconstructive, burn, craniofacial, hand, pediatric, and
                aesthetic surgical procedures, providing her with extensive experience in both functional and cosmetic
                surgery. She is dedicated to delivering safe, evidence-based, and patient-centered care while
                maintaining the highest standards of surgical excellence.
              </p>
              <br />
              <div className="about-eyebrow">
                {" "}
                <h4>Career Milestones</h4>
              </div>
              <ul className="tl-list mb-5">
                <li className="tl-item">
                  <div className="tl-dot">
                    <i className="fa-solid fa-graduation-cap"></i>
                  </div>
                  <div>
                    <p className="tl-title">Army Medical College, Rawalpindi</p>
                    <p className="tl-sub">Completed MBBS — foundation for a distinguished surgical career</p>
                  </div>
                </li>
                <li className="tl-item">
                  <div className="tl-dot">
                    <i className="fa-solid fa-heart-pulse"></i>
                  </div>
                  <div>
                    <p className="tl-title">Children's Hospital, Lahore</p>
                    <p className="tl-sub">Specialized plastic surgery training at a renowned institute of Lahore</p>
                  </div>
                </li>
                <li className="tl-item">
                  <div className="tl-dot">
                    <i className="fa-solid fa-hospital"></i>
                  </div>
                  <div>
                    <p className="tl-title">Services Hospital &amp; Mayo Hospital, Lahore</p>
                    <p className="tl-sub">Advanced rotations managing complex reconstructive cases.</p>
                  </div>
                </li>
                <li className="tl-item" style={{ paddingBottom: 0 }}>
                  <div className="tl-dot">
                    <i className="fa-solid fa-medal"></i>
                  </div>
                  <div>
                    <p className="tl-title">Consultant Plastic Surgeon</p>
                    <p className="tl-sub">Reconstructive and aesthetic surgery</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="about-img-wrapper">
                <img src="/images/about.jpg" className="about-img" alt="Dr. Shiza Naeem" />
              </div>
            </div>
          </div>

          {/* ── Specialty Cards ── */}
          <div className="row g-4 mb-4">
            <div className="col-md-6">
              <div className="card-base card-accent">
                <div className="about-eyebrow">
                  {" "}
                  <h4>Specialty</h4>
                </div>
                <h2 className="section-heading" style={{ fontSize: "22px" }}>
                  Reconstructive Surgery
                </h2>
                <p className="section-body">
                  A particular passion for the reconstruction of trauma and burn patients — restoring both function and
                  appearance for those affected by life-altering injuries with personalized, comprehensive care tailored
                  to each patient's unique needs.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-base card-accent">
                <div className="about-eyebrow">
                  {" "}
                  <h4>Specialty</h4>
                </div>
                <h2 className="section-heading" style={{ fontSize: "22px" }}>
                  Aesthetic Surgery
                </h2>
                <p className="section-body">
                  Expert in a wide variety of aesthetic procedures, dedicated to achieving natural, harmonious results
                  while maintaining a balanced, youthful look — combining artistry with surgical precision for every
                  patient.
                </p>
              </div>
            </div>
          </div>

          {/* ── Expertise Chips ── */}
          <div className="mb-5 mt-5">
          <div className="about-eyebrow">
                  {" "}
                  <h4>Areas of Expertise</h4>
                </div>
            
            <span className="hero-badge">
              <i className="fa-solid fa-droplet"></i>Liposuction
            </span>
            <span className="hero-badge">
              <i className="fa-solid fa-person"></i>Abdominoplasty
            </span>
            <span className="hero-badge">
              <i className="fa-solid fa-face-smile"></i>Rhinoplasty
            </span>
            <span className="hero-badge">
              <i className="fa-solid fa-leaf"></i>Anti-wrinkle treatments
            </span>
            <span className="hero-badge">
              <i className="fa-solid fa-fire"></i>Burn reconstruction
            </span>
            <span className="hero-badge">
              <i className="fa-solid fa-kit-medical"></i>Trauma reconstruction
            </span>
          </div>

          {/* ── Stats ── */}
          <div className="row g-3 mb-5 mt-5">
            <div className="col-4">
              <div className="stat-card">
                <span className="stat-num">7+</span>
                <span className="stat-lbl">Years experience</span>
              </div>
            </div>
            <div className="col-4">
              <div className="stat-card">
                <span className="stat-num">3</span>
                <span className="stat-lbl">Major institutions</span>
              </div>
            </div>
            <div className="col-4">
              <div className="stat-card">
                <span className="stat-num">2</span>
                <span className="stat-lbl">Core specialties</span>
              </div>
            </div>
          </div>

          {/* ── Commitment + Image ── */}
          <div className="row align-items-stretch g-4 mb-2">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <div className="card-base card-accent">
               <div className="about-eyebrow">
                  {" "}
                  <h4>Philosophy</h4>
                </div>
                <h2 className="section-heading" style={{ fontSize: "22px" }}>
                  Commitment to Excellence
                </h2>
                <p className="section-body">
                  With a firm commitment to excellence in patient care, Dr. Naeem ensures that her patients receive the
                  highest quality treatment. Whether for reconstructive restoration or cosmetic enhancement, her
                  approach prioritizes the health, well-being, and satisfaction of each individual.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-img2-wrapper">
                <img src="/images/hire.png" className="about-img2" alt="Dr. Shiza Naeem at work" />
              </div>
            </div>
          </div>

          {/* ── CTA Strip ── */}
          <div className="cta-strip">
            <div>
              <p style={{ fontWeight: 500, color: "#C9956C", fontSize: "15px", margin: "0 0 3px" }}>
                Ready to consult with Dr. Naeem?
              </p>
              <p style={{ fontSize: "13px", color: "#F8F0E8", margin: 0 }}>
                Book a consultation at her clinic in Lahore
              </p>
            </div>
            <a href="/contact" className="cta-btn">
              <i className="fa-regular fa-calendar-plus"></i>
              Book a Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
