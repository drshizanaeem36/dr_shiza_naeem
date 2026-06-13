import React from "react";
import "./Reviewsec.css";
import { Link } from "react-router-dom";

const reviews = [
  {
    name: "Ayesha Siddiqui",
    role: "Patient",
    company: "Lahore",
    avatar: "AS",
    color: "cyan",
    quote:
      "Dr. Shiza Naeem performed my rhinoplasty with exceptional precision. The results exceeded my expectations and her team made me feel completely at ease throughout the entire process.",
  },
  {
    name: "Bilal Mahmood",
    role: "Patient",
    company: "Karachi",
    avatar: "BM",
    color: "green",
    quote:
      "After my burn injury, I had lost all hope. Dr. Shiza Naeem's reconstructive work gave me my confidence back. Her expertise in burn treatment is truly remarkable.",
  },
  {
    name: "Zara Hussain",
    role: "Patient",
    company: "Islamabad",
    avatar: "ZH",
    color: "cyan",
    quote:
      "I traveled from Islamabad for my abdominoplasty and it was absolutely worth it. Dr. Shiza Naeem's attention to detail and post-operative care is second to none.",
  },
  {
    name: "Usman Tariq",
    role: "Patient",
    company: "Faisalabad",
    avatar: "UT",
    color: "green",
    quote:
      "Dr. Shiza Naeem handled my tendon repair surgery with incredible skill. Recovery was smooth and her follow-up care was thorough. I'm fully functional again thanks to her.",
  },
  {
    name: "Hamza Chaudhry",
    role: "Patient",
    company: "Rawalpindi",
    avatar: "HC",
    color: "green",
    quote:
      "After my nerve repair procedure, I regained sensation I thought was gone forever. Dr. Shiza Naeem's surgical expertise and compassionate approach make her truly one of a kind.",
  },
  {
    name: "Zara Malik",
    role: "Patient",
    company: "Islamabad",
    avatar: "AM",
    color: "green",
    quote:
      "Botox treatment with Dr. Shiza Naeem gave me a natural, refreshed look while softening fine lines. The procedure was smooth, and the results are subtle yet very effective.",
  },
];

export default function ReviewSec() {
  const track = [...reviews, ...reviews]; // duplicate for seamless loop

  return (
    <section id="testimonials1" className="testimonials1-section">
      <div className="container">
        <div className="sv-head">
          <div className="sp-tag">
            <span className="sp-tag-line" />
            <span className="sp-tag-diamond" />
            Hear from my clients
            <span className="sp-tag-diamond" />
            <span className="sp-tag-line" />
          </div>
          <h1 className="hero-title">
            My<em> Testimonial</em>
          </h1>
          <p className="rev-desc">
            Don't just take my word for it — see what my clients have to say about their experience working with me. I'm
            proud of the relationships I've built and the impact I've made on their projects.
          </p>
        </div>
      </div>

      {/* Full-width carousel — outside container */}
      <div className="testimonials-carousel1" aria-label="Client testimonials carousel">
        <div className="carousel1-track">
          {track.map((t, i) => (
            <div key={i} className="testimonial1-card">
              <div className="card1-inner">
                <div className="quote1-mark">"</div>
                <blockquote className="testimonial1-quote">{t.quote}</blockquote>
                <div className="card1-divider" />
                <div className="testimonial1-author">
                  <div className="testimonial1-avatar">{t.avatar}</div>
                  <div>
                    <p className="author1-name">{t.name}</p>
                    <p className="author1-role">
                      {t.role} @ {t.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="sv-foot">
          <Link className="sv-btn" to="/testimonials">
            View all testimonials
            <i className="fa-solid fa-arrow-right" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
