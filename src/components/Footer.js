import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="ft-root">
      {/* Ornamental top rule */}
      <div className="ft-top-ornament">
        <span className="ft-orn-line"></span>
        <span className="ft-orn-diamond"></span>
        <span className="ft-orn-line"></span>
      </div>

      {/* 3-column grid */}
      <div className="ft-top">
        {/* Brand */}
        <div className="ft-col ft-col--brand">
          <Link className="ft-brand" to="/">
            <img src="/images/logo_updated-removebg-preview.png" alt="Dr. Shiza Naeem" className="ft-logo" />
          </Link>
         
          <p className="ft-logo-sub">Plastic &amp; Aesthetic Surgeon</p>
          <p className="ft-tagline">
            Redefining beauty with precision,
            <br />
            artistry &amp; compassionate care.
          </p>
        </div>

        {/* Quick Links */}
        <div className="ft-col ft-col--links">
          <span className="ft-col-label">
            <span className="ft-col-label-line"></span>
            Navigation
          </span>
          <ul className="ft-links">
            {["Home", "About", "Services", "Testimonials", "Contact"].map((label) => (
              <li key={label}>
                <Link to={label === "Home" ? "/" : `/${label.toLowerCase()}`}>
                  <span className="ft-link-arrow">—</span>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="ft-col ft-col--contact">
          <span className="ft-col-label">
            <span className="ft-col-label-line"></span>
            Get in Touch
          </span>
          <div className="ft-contact-item">
            <i className="fa-solid fa-envelope" aria-hidden="true" />
            <span>dr.shizanaeem36@gmail.com</span>
          </div>
          <div className="ft-contact-item">
            <i className="fa-solid fa-phone" aria-hidden="true" />
            <span>0339-0100389</span>
          </div>
          <div className="ft-contact-item">
            <i className="fa-solid fa-location-dot" aria-hidden="true" />
            <span>Lahore, Pakistan</span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="ft-bottom">
        <p className="ft-copy">
          © 2026 <Link to="/">Dr. Shiza Naeem</Link>. All rights reserved.
        </p>
        <div className="ft-socials">
          {[
            { href: "/", icon: "fab fa-instagram", label: "Instagram" },
            { href: "/", icon: "fab fa-facebook-f", label: "Facebook" },
            { href: "/", icon: "fab fa-twitter", label: "Twitter" },
            { href: "/", icon: "fab fa-linkedin-in", label: "LinkedIn" },
          ].map(({ href, icon, label }) => (
            <a key={label} className="ft-social-btn" href={href} aria-label={label}>
              <i className={icon} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
