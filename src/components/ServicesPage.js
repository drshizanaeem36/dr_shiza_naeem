import React, { useState } from "react";
import Banner5 from "./Banner5";
import "./ServicesPage.css";

const CATEGORIES = [
  "All",
  "Facial",
  "Reconstructive",
  "Breast",
  "Body",
  "Trauma Reconstruction",
  "Hair Restoration",
  "Aesthetic Treatments",
  "Burns",
];

const services = [
  {
    title: "Facelift",
    img: "./images/s1.jpg",
    icon: "fa-solid fa-face-smile",
    category: "Facial",
    description:
      "A facelift, or rhytidectomy, is a cosmetic surgical procedure designed to reduce the visible signs of aging on the face. It involves tightening the skin and underlying tissues to smooth out wrinkles, lift sagging skin, and restore a more youthful appearance.",
  },
  {
    title: "Rhinoplasty",
    img: "./images/s2.jpg",
    icon: "fa-solid fa-nose",
    category: "Facial",
    description:
      "Rhinoplasty, commonly referred to as a nose job, is a surgical procedure that reshapes the nose to improve its appearance or function. It is one of the most popular cosmetic surgeries worldwide and can be performed for a variety of reasons.",
  },
  {
    title: "Blepharoplasty",
    img: "./images/s3.jpg",
    icon: "fa-regular fa-eye",
    category: "Facial",
    description:
      "Blepharoplasty is a cosmetic surgical procedure that removes excess skin, fat, or muscle from the eyelids. It can be performed on the upper or lower eyelids to address drooping, puffiness, or vision obstruction, improving both appearance and eyelid function.",
  },
  {
    title: "Nerve Repair",
    img: "./images/s4.webp",
    icon: "fa-solid fa-bolt",
    category: "Reconstructive",
    description:
      "Nerve repair is a surgical procedure aimed at restoring the function of damaged nerves. It involves reconnecting severed nerve ends, removing scar tissue, or using grafts to bridge gaps. This procedure helps regain sensation and motor function, depending on the nerve affected.",
  },
  {
    title: "Tendon Repair",
    img: "./images/s5.jpg",
    icon: "fa-solid fa-person-running",
    category: "Reconstructive",
    description:
      "Tendon repair is a surgical procedure to treat torn or damaged tendons, which connect muscles to bones. The surgery involves reattaching the tendon ends or using grafts to bridge gaps. The goal is to restore strength, helping to prevent long-term complications like weakness or stiffness.",
  },
  {
    title: "Breast Reduction",
    img: "./images/s6.jpg",
    icon: "fa-solid fa-minimize",
    category: "Breast",
    description:
      "Breast reduction is a surgical procedure that removes excess breast tissue and skin to reduce breast size. It aims to alleviate physical discomfort, such as back or neck pain, and improve body proportions. The surgery enhances comfort and overall aesthetic appearance.",
  },
  {
    title: "Breast Augmentation",
    img: "./images/s7.jpg",
    icon: "fa-solid fa-maximize",
    category: "Breast",
    description:
      "Breast augmentation is a surgical procedure that involves the use of implants or fat transfer to increase breast size and improve shape. It is often done for cosmetic reasons or for reconstructive purposes after surgery or injury. The procedure can boost confidence and appearance.",
  },
  {
    title: "Breast Lift",
    img: "./images/s8.jpg",
    icon: "fa-solid fa-arrow-up",
    category: "Breast",
    description:
      "A breast lift is a surgical procedure that raises and reshapes sagging breasts by removing excess skin and tightening the surrounding tissue. It restores a firmer, more youthful appearance, often performed to counteract changes caused by aging, pregnancy, weight loss, or gravity.",
  },
  {
    title: "Arm Lift Surgery",
    img: "./images/s9.jpg",
    icon: "fa-solid fa-hand",
    category: "Body",
    description:
      "Arm lift surgery, also known as brachioplasty, involves the removal of excess skin and fat from the upper arms to create a more toned and defined appearance. Commonly performed after significant weight loss or due to aging, addressing sagging skin that cannot be improved through exercise alone.",
  },
  {
    title: "Liposuction",
    img: "./images/s10.jpg",
    icon: "fa-solid fa-droplet",
    category: "Body",
    description:
      "Liposuction is a cosmetic surgery that removes excess fat from specific areas of the body using a suction technique. It targets areas like the abdomen, thighs, or arms to improve body contour and shape. While not a weight-loss solution, it helps refine body proportions for a smoother appearance.",
  },
  {
    title: "Fat Grafting",
    img: "./images/s11.png",
    icon: "fa-solid fa-right-left",
    category: "Body",
    description:
      "Fat grafting, or fat transfer, is a cosmetic procedure where fat is liposuctioned from one part of the body and injected into another to enhance volume or contour. Common areas include the face, breasts, or buttocks. It provides a natural, long-lasting result using the patient's own fat.",
  },
  {
    title: "Abdominoplasty",
    img: "./images/s13.png",
    icon: "fa-solid fa-person",
    category: "Body",
    description:
      "Abdominoplasty, or tummy tuck, is a cosmetic surgical procedure that removes excess skin and fat from the abdomen while tightening the underlying muscles. It improves abdominal contour and is often performed after significant weight loss or pregnancy to restore a flatter, firmer appearance.",
  },
  {
    title: "Wound Management",
    img: "./images/s15.jpg",
    icon: "fa-solid fa-kit-medical",
    category: "Trauma Reconstruction",
    description:
      "Wound management surgery addresses complex and chronic wounds through advanced techniques including debridement, tissue reconstruction, and flap procedures. These targeted interventions accelerate healing, minimize scarring, and restore skin integrity for traumatic, post-surgical, and non-healing wounds.",
    horizontal: true,
  },
  {
    title: "Hair Transplant",
    img: "./images/s17.jpg",
    icon: "fa-solid fa-scissors",
    category: "Hair Restoration",
    description:
      "Hair transplant surgery restores natural hair growth through advanced techniques including FUE (Follicular Unit Extraction) and FUT (Follicular Unit Transplantation). These precise procedures relocate healthy hair follicles to thinning or balding areas, delivering permanent, natural-looking results with minimal downtime.",
    horizontal: true,
  },

  {
    title: "Botox",
    img: "./images/s18.jpg",
    icon: "fa-solid fa-syringe",
    category: "Aesthetic Treatments",
    description:
      "Botox treatment involves precise micro-injections of botulinum toxin to relax overactive facial muscles, smoothing dynamic wrinkles and fine lines. This quick, non-surgical procedure delivers natural-looking rejuvenation with no downtime, targeting areas such as forehead lines, crow's feet, and frown lines.",
    horizontal: true,
  },
  {
    title: "Dermal Fillers",
    img: "./images/s19.jpg",
    icon: "fa-solid fa-droplet",
    category: "Aesthetic Treatments",
    description:
      "Dermal filler treatments restore lost volume and contour facial features using hyaluronic acid-based injections. From plumping lips to defining cheekbones and softening nasolabial folds, fillers deliver immediate, natural-looking enhancement with results lasting six months to two years.",
    horizontal: true,
  },
  {
    title: "Nano Fat Grafting",
    img: "./images/s16.jpg",
    icon: "fa-solid fa-microscope",
    category: "Aesthetic Treatments",
    description:
      "Nano fat grafting is an advanced regenerative procedure that harvests, processes, and reinjects ultra-refined fat cells rich in stem cells and growth factors. This minimally invasive treatment improves skin texture, tone, and elasticity — naturally rejuvenating delicate areas such as under-eyes, fine lines, and aged skin.",
    horizontal: true,
  },

  {
    title: "Burn Injuries",
    img: "./images/s12.jpg",
    icon: "fa-solid fa-fire",
    category: "Burns",
    description:
      "Burn injury surgery treats severe burns through various procedures like debridement (removal of damaged tissue), skin grafts, and reconstructive surgery. These critical steps promote healing, reduce infection risk, and restore both function and appearance, especially for deep or extensive burn injuries.",
    horizontal: true,
  },
];

const SECTIONS = [
  { label: "Facial Procedures", category: "Facial" },
  { label: "Reconstructive Surgeries", category: "Reconstructive" },
  { label: "Breast Enhancements", category: "Breast" },
  { label: "Body Contouring", category: "Body" },
  { label: "Trauma Reconstruction", category: "Trauma Reconstruction" },
  { label: "Hair Restoration", category: "Hair Restoration" },
  { label: "Aesthetic Treatments", category: "Aesthetic Treatments" },
  { label: "Burn Treatments", category: "Burns" },
];

const ServiceCard = ({ service, index }) => (
  <div className={`svc-card${service.horizontal ? " horizontal" : ""}`}>
    <div className="svc-img-wrap">
      <img
        src={service.img}
        alt={service.title}
        onError={(e) => {
          e.target.style.display = "none";
          e.target.parentNode.classList.add("show-placeholder");
        }}
      />
      <div className="svc-img-placeholder" style={{ display: "none" }}>
        <i className={service.icon} aria-hidden="true"></i>
        <span>{service.title}</span>
      </div>
    </div>
    <div className="svc-body">
      <div className="svc-number">{String(index + 1).padStart(2, "0")}</div>

      <p className="svc-title">{service.title}</p>
      <p className="svc-desc">{service.description}</p>
    </div>
  </div>
);

const SectionDivider = ({ label }) => (
  <div className="sp-section-header">
    <div className="sp-section-line" />
    <span className="sp-section-label">{label}</span>
    <div className="sp-section-line" />
  </div>
);

const ServicesPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleSections = activeFilter === "All" ? SECTIONS : SECTIONS.filter((s) => s.category === activeFilter);

  return (
    <div>
      <Banner5 />

      <section id="services" className="services_wrapper sp">
        <div className="container">
          {/* ── Page header ── */}
          <div className="sp-header">
            <div className="sp-tag">
              <span className="sp-tag-line" />
              <span className="sp-tag-diamond" />
              What I can do for you
              <span className="sp-tag-diamond" />
              <span className="sp-tag-line" />
            </div>
            <h1 className="sp-title">
              Our <em>Services</em>
            </h1>
            <p className="sp-subtitle">
              Dedicated to enhancing your natural beauty and boosting confidence through a range of personalized plastic
              surgery services.
            </p>

            {/* ── Filter pills ── */}
            <div className="filter-pills">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  className={`filter-pill${activeFilter === cat ? " active" : ""}`}
                  onClick={() => setActiveFilter(cat)}>
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* ── Service sections ── */}
          {visibleSections.map((section) => {
            const items = services.filter((s) => s.category === section.category);
            const isSingle = items.length === 1;

            return (
              <div key={section.category} className="sp-section">
                <SectionDivider label={section.label} />
                <div className={`sp-grid${isSingle ? " single" : ""}`}>
                  {items.map((service, i) => (
                    <ServiceCard key={service.title} service={service} index={i} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
