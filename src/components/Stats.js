import React, { useEffect, useRef, useState } from "react";
import "./Stats.css";

/* ── stat definitions ─────────────────────────────────────────────
   target  : numeric end value
   decimals: decimal places shown while counting
   suffix  : text appended after the number ("+", "%", etc.)
──────────────────────────────────────────────────────────────────── */
const stats = [
  { target: 1500, decimals: 0, suffix: "+", label: "Procedures Performed" },
  { target: 98.7, decimals: 1, suffix: "%", label: "Patient Satisfaction"  },
  { target: 8,    decimals: 0, suffix: "+", label: "Years of Excellence"   },
];

/* ── count-up hook ────────────────────────────────────────────────
   Animates 0 → target over `duration` ms once `active` turns true
──────────────────────────────────────────────────────────────────── */
function useCountUp(target, decimals, duration, active) {
  const [count, setCount] = useState(0);
  const rafRef  = useRef(null);
  const startRef = useRef(null);

  useEffect(() => {
    if (!active) return;
    startRef.current = null;

    const animate = (ts) => {
      if (!startRef.current) startRef.current = ts;
      const elapsed  = ts - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased    = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(parseFloat((eased * target).toFixed(decimals)));
      if (progress < 1) rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active, target, decimals, duration]);

  return count;
}

/* ── single animated stat card ───────────────────────────────────── */
function StatItem({ stat, visible, delay }) {
  const count = useCountUp(stat.target, stat.decimals, 1800, visible);

  const display =
    stat.target >= 1000
      ? count.toLocaleString("en-US", { maximumFractionDigits: stat.decimals })
      : count.toFixed(stat.decimals);

  return (
    <div
      className={`stat-col${visible ? " visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="stat-item">
        <div className="stat-value">
          {display}{stat.suffix}
        </div>
        <div className="stat-divider" />
        <div className="stat-label">{stat.label}</div>
      </div>
    </div>
  );
}

/* ── main component ───────────────────────────────────────────────── */
const Stats = () => {
  const [visible, setVisible] = useState(stats.map(() => false));
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry.isIntersecting) return;

        // Section is in view — stagger each counter in
        stats.forEach((_, i) => {
          setTimeout(() => {
            setVisible((prev) => {
              const next = [...prev];
              next[i] = true;
              return next;
            });
          }, i * 150);
        });

        // Only fire once
        observer.disconnect();
      },
      { threshold: 0.3 } // trigger when 30% of the section is visible
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="stats-band" ref={sectionRef}>
        <div className="stats-inner-rule" />
        <div className="container">
          <div className="row">
            {stats.map((stat, i) => (
              <StatItem
                key={i}
                stat={stat}
                visible={visible[i]}
                delay={i * 120}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Stats;

