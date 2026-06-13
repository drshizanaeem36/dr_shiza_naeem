import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header_wrapper">
      <nav className={`navbar navbar-expand-lg ${scrolled ? "header-scrolled" : ""}`}>
        <div className="container nav-container">
          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img src="/images/logo3.png" alt="Dr. Shiza Naeem" className="navbar-logo" />
          </Link>

          {/* Mobile toggler */}
          <button
            className={`navbar-toggler ${menuOpen ? "open" : ""}`}
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation">
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Nav links */}
          <div className={`navbar-collapse ${menuOpen ? "show" : ""}`}>
            <ul className="navbar-nav menu-navbar-nav">
              {["Home", "About", "Services", "Testimonials", "Contact"].map((label, i) => (
                <li className="nav-item" key={label}>
                  <NavLink
                    className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                    to={label === "Home" ? "/" : `/${label.toLowerCase()}`}
                    style={{ animationDelay: `${i * 0.06}s` }}
                    onClick={() => setMenuOpen(false)}>
                    <span className="nav-link-text">{label}</span>
                    <span className="nav-link-underline"></span>
                  </NavLink>
                </li>
              ))}
              <li className="nav-item nav-cta">
                <Link className="btn-book" to="/contact">
                  Book Consultation
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
