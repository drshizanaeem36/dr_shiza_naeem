import { useState, useEffect, useRef } from "react";
import "./Testimonial.css";
import Banner6 from "./Banner6";
import { Link } from "react-router-dom";
const testimonials = [
  {
    id: 1,
    name: "Ayesha Malik",
    procedure: "Rhinoplasty",
    category: "Facial",
    rating: 4,
    date: "March 2024",
    avatar: "AM",
    colorClass: "avatar-gold",
    text: "Dr. Shiza Naeem's artistry is truly unmatched. After years of insecurity about my nose, I finally feel like myself. The result looks so natural — even my closest friends can't tell I had anything done. Her attention to detail and the care she showed throughout my recovery made all the difference.",
    location: "Lahore, Pakistan",
  },

  {
    id: 3,
    name: "Zara Iftikhar",
    procedure: "Blepharoplasty",
    category: "Facial",
    rating: 5,
    date: "July 2023",
    avatar: "ZI",
    colorClass: "avatar-sage",
    text: "My hooded eyelids were making me look exhausted even after a full night's rest. Dr. Shiza Naeem's consultation was thorough and completely unhurried — she answered every concern I had. The procedure was swift, recovery was minimal, and the outcome is stunning. I look bright and vibrant again.",
    location: "Multan, Pakistan",
  },
  {
    id: 4,
    name: "Hamza Farooq",
    procedure: "Tendon Repair",
    category: "Reconstructive",
    rating: 5,
    date: "May 2023",
    avatar: "HF",
    colorClass: "avatar-navy",
    text: "A sports injury left my hand barely functional and I feared I'd never work properly again. Dr. Shiza Naeem's reconstructive expertise restored nearly full mobility. I'm back to my daily routine and even playing cricket with my sons on weekends. Her entire surgical team is truly world class.",
    location: "Peshawar, Pakistan",
  },
  {
    id: 5,
    name: "Tariq Mehmood",
    procedure: "Nerve Repair",
    category: "Reconstructive",
    rating: 4,
    date: "February 2023",
    avatar: "TM",
    colorClass: "avatar-slate",
    text: "After a road accident damaged the nerves in my arm, I was told I might never regain full sensation. Dr. Shiza Naeem's skill proved otherwise. The recovery was gradual but remarkable — I now have nearly complete feeling restored. Her patience and expertise through every follow-up was extraordinary.",
    location: "Islamabad, Pakistan",
  },
  {
    id: 6,
    name: "Nadia Hussain",
    procedure: "Breast Reduction",
    category: "Breast",
    rating: 4,
    date: "September 2023",
    avatar: "NH",
    colorClass: "avatar-rose",
    text: "Chronic back pain and discomfort had been a part of my life for years. Dr. Shiza Naeem walked me through every step with patience and compassion. The surgery was smooth, recovery was well-managed, and I feel like a completely different person. Life-changing in the truest sense.",
    location: "Faisalabad, Pakistan",
  },
  {
    id: 7,
    name: "Hira Naz",
    procedure: "Breast Augmentation",
    category: "Breast",
    rating: 5,
    date: "April 2022",
    avatar: "HN",
    colorClass: "avatar-navy",
    text: "I had been considering this procedure for years but was nervous about finding the right surgeon. A friend's recommendation brought me to Dr. Shiza Naeem and it was the best decision I ever made. She was honest, thorough, and made me feel completely safe. The results are beautiful and entirely natural-looking.",
    location: "Karachi, Pakistan",
  },
  {
    id: 8,
    name: "Amna Riaz",
    procedure: "Breast Lift",
    category: "Breast",
    rating: 4,
    date: "June 2023",
    avatar: "AR",
    colorClass: "avatar-blush",
    text: "Following significant weight loss, I needed a lift to restore shape and firmness. Dr. Shiza Naeem was professional, kind, and incredibly skilled. She explained everything clearly and the results are beyond what I imagined. I feel confident and feminine again for the first time in years.",
    location: "Lahore, Pakistan",
  },
  {
    id: 9,
    name: "Rania Baig",
    procedure: "Abdominoplasty",
    category: "Body",
    rating: 5,
    date: "October 2022",
    avatar: "RB",
    colorClass: "avatar-rose",
    text: "After three pregnancies, I had lost hope of ever feeling confident in my own skin again. Dr. Shiza Naeem's tummy tuck procedure gave me a contour I hadn't seen in years. Her aftercare instructions were detailed and her team was always available when I had questions. Absolutely wonderful experience.",
    location: "Sialkot, Pakistan",
  },
  {
    id: 10,
    name: "Usman Tariq",
    procedure: "Liposuction",
    category: "Body",
    rating: 5,
    date: "January 2023",
    avatar: "UT",
    colorClass: "avatar-slate",
    text: "Despite years of dieting and exercise, stubborn fat around my abdomen simply would not budge. Dr. Shiza Naeem explained the procedure clearly and set realistic expectations from the very first consultation. The results exceeded what I had hoped for. Professional, precise, and genuinely caring.",
    location: "Lahore, Pakistan",
  },
  {
    id: 11,
    name: "Fatima Zahra",
    procedure: "Fat Grafting",
    category: "Body",
    rating: 4,
    date: "August 2022",
    avatar: "FZ",
    colorClass: "avatar-blush",
    text: "I wanted a subtle, natural enhancement and Dr. Shiza Naeem delivered exactly that. Fat grafting was the perfect solution — using my own tissue meant the results feel completely natural. She listened carefully to what I wanted and the outcome exceeded my expectations. Highly recommend her to everyone.",
    location: "Hyderabad, Pakistan",
  },
  {
    id: 12,
    name: "Sobia Rehman",
    procedure: "Arm Lift Surgery",
    category: "Body",
    rating: 4,
    date: "June 2022",
    avatar: "SR",
    colorClass: "avatar-sage",
    text: "Loose skin on my upper arms had been bothering me for years following significant weight loss. Dr. Shiza Naeem made me feel completely at ease from my very first visit. The arm lift results are smooth and natural, and the scarring is minimal. I now wear sleeveless clothes with full confidence.",
    location: "Quetta, Pakistan",
  },
{
  id: 13,
  name: "Madiha Siddiqui",
  procedure: "Wound Management",
  category: "Trauma Reconstruction",
  rating: 4,
  date: "March 2023",
  avatar: "MS",
  colorClass: "avatar-gold",
  text: "I had been dealing with a complicated wound that wasn't healing despite multiple treatments. Dr. Shiza Naeem's expertise in wound management made all the difference. She carefully assessed my condition, explained every step of the treatment plan, and provided outstanding follow-up care. Thanks to her dedication and skill, my wound healed successfully, and I was able to return to my normal routine with confidence.",
  location: "Rawalpindi, Pakistan",
},
{
  id: 14,
  name: "Imran Bashir",
  procedure: "Hair Transplant",
  category: "Hair Restoration",
  rating: 5,
  date: "November 2022",
  avatar: "IB",
  colorClass: "avatar-navy",
  text: "I had been struggling with significant hair loss for several years before I consulted Dr. Shiza Naeem. She explained the hair transplant procedure in detail and made me feel completely comfortable throughout the process. The results have been outstanding—my hairline looks natural, and my confidence has been fully restored. Her professionalism and care truly made a difference in my journey.",
  location: "Gujranwala, Pakistan",
},
  {
    id: 15,
    name: "Bilal Chaudhry",
    procedure: "Burn Injury Reconstruction",
    category: "Burns",
    rating: 5,
    date: "November 2023",
    avatar: "BC",
    colorClass: "avatar-slate",
    text: "A severe burn from a kitchen accident had affected my confidence for over a decade. Dr. Shiza Naeem's reconstructive work genuinely changed my life. The scarring has faded dramatically and I finally feel comfortable again. I cannot thank her enough for giving me back my confidence.",
    location: "Islamabad, Pakistan",
  },
  {
    id: 16,
    name: "Saima Javed",
    procedure: "Burn Injury Reconstruction",
    category: "Burns",
    rating: 5,
    date: "August 2023",
    avatar: "SJ",
    colorClass: "avatar-gold",
    text: "I suffered burns on my face and neck in a fire accident and thought my life was over. Dr. Shiza Naeem approached my case with such sensitivity and skill. Over multiple procedures she restored my appearance beyond what I thought possible. Her compassion is as remarkable as her surgical expertise.",
    location: "Lahore, Pakistan",
  },
  {
  id: 17,
  name: "Ayesha Khan",
  procedure: "Botox Treatment",
  category: "Aesthetic Treatments",
  rating: 4,
  date: "June 2024",
  avatar: "AK",
  colorClass: "avatar-pink",
  text: "I opted for Botox treatment with Dr. Shiza Naeem to reduce fine lines on my forehead and around my eyes. She explained everything clearly and ensured I felt comfortable throughout the procedure. The results look very natural—my face appears refreshed and youthful without looking overdone. I’m extremely satisfied with her expertise and gentle approach.",
  location: "Islamabad, Pakistan",
},
{
  id: 18,
  name: "Sara Ali",
  procedure: "Dermal Fillers",
  category: "Aesthetic Treatments",
  rating: 5,
  date: "August 2024",
  avatar: "SA",
  colorClass: "avatar-purple",
  text: "I got dermal fillers done with Dr. Shiza Naeem to enhance volume in my cheeks and improve facial symmetry. She was very professional and carefully explained the entire process, making sure I was comfortable at every step. The results are subtle yet beautiful—my face looks more youthful and naturally lifted without any overdone appearance. I’m very happy with the outcome and her expertise.",
  location: "Lahore, Pakistan",
},
];

const filters = [
  { label: "All", value: "All" },
  { label: "Facial", value: "Facial" },
  { label: "Reconstructive", value: "Reconstructive" },
  { label: "Breast", value: "Breast" },
  { label: "Body", value: "Body" },
  { label: "Trauma Reconstruction", value: "Trauma Reconstruction" },
  { label: "Hair Restoration", value: "Hair Restoration" },
  { label: "Aesthetic Treatments", value: "Aesthetic Treatments" },
  { label: "Burns", value: "Burns" },
];

const StarRating = ({ count = 5 }) => {
  return (
    <div className="d-flex gap-1 mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#C9A84C">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
};

const TestimonialCard = ({ testimonial, index }) => {
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="col-md-6 col-lg-4"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`,
      }}>
      <div className="testimonial-card h-100 d-flex flex-column">
        <div className="quote-mark">&ldquo;</div>
        <StarRating count={testimonial.rating} />
        <p className="testimonial-text flex-grow-1">{testimonial.text}</p>
        <div className="testimonial-footer mt-auto pt-4">
          <div className="d-flex align-items-center gap-3">
            <div className={`testimonial-avatar ${testimonial.colorClass}`}>{testimonial.avatar}</div>
            <div>
              <div className="d-flex align-items-center gap-2">
                <span className="patient-name">{testimonial.name}</span>
              </div>
              <div className="procedure-tag">{testimonial.procedure}</div>
              <div className="patient-meta">
                {testimonial.location} · {testimonial.date}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonial = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [displayed, setDisplayed] = useState(testimonials);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (activeFilter === "All") {
      setDisplayed(testimonials);
    } else {
      setDisplayed(testimonials.filter((t) => t.category === activeFilter));
    }
  }, [activeFilter]);

  return (
    <>
      <Banner6 />
      {/* HERO */}
      <section className="testimonials-hero">
        <div className="container">
          <div
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.8s ease, transform 0.8s ease",
            }}>
            <div className="sp-tag">
              <span className="sp-tag-line" />
              <span className="sp-tag-diamond" />
              Patient and Procedure Testimonials
              <span className="sp-tag-diamond" />
              <span className="sp-tag-line" />
            </div>
            <h1 className="hero-title">
              My<em> Testimonial</em>
            </h1>

            <p className="hero-subtitle">
              Every face tells a story. Read the experiences of patients whose lives were changed through the art and
              science of reconstructive and aesthetic surgery.
            </p>
          </div>
        </div>
      </section>

      {/* FILTER */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-scrollwrap">
            {filters.map((f) => (
              <button
                key={f.value}
                className={`filter-pill ${activeFilter === f.value ? "active" : ""}`}
                onClick={() => setActiveFilter(f.value)}>
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS GRID */}
      <section className="testimonials-grid">
        <div className="container">
          <div className="row g-4">
            {displayed.length > 0 ? (
              displayed.map((t, i) => <TestimonialCard key={t.id} testimonial={t} index={i} />)
            ) : (
              <div className="col-12 text-center py-5">
                <p
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "1.2rem",
                    color: "var(--warm-gray)",
                  }}>
                  No testimonials found for this procedure.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FEATURED QUOTE */}
      <section className="featured-quote-section">
        <div className="container">
          <div className="title-ornament mb-4">
            <div className="ornament-line"></div>
            <div className="ornament-diamond"></div>
            <div className="ornament-line right"></div>
          </div>
          <blockquote className="featured-quote-text">
            " Surgery is not about changing who you are. It is about allowing who you truly are to finally be seen."
          </blockquote>
        </div>
      </section>
      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="sp-tag">
                <span className="sp-tag-line" />
                <span className="sp-tag-diamond" />
                Schedule a Consultation
                <span className="sp-tag-diamond" />
                <span className="sp-tag-line" />
              </div>
              <h2 className="cta-title">Begin Your Journey</h2>
              <p className="cta-body">
                Your story could be the next transformation. Schedule a private consultation and discover what is
                possible.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <Link className="banner-btn-primary" to="/contact">
                  Book an appointment
                  <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
