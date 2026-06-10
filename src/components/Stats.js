import React, { useEffect, useRef, useState } from "react";
import "./Stats.css";

const stats = [
  { value: "2,400+", label: "Procedures Performed" },
  { value: "98.7%",  label: "Patient Satisfaction"  },
  { value: "22",     label: "Years of Excellence"   },
  { value: "14",     label: "Awards & Recognitions" },
];


const Stats = () => {
  const colRefs = useRef([]);
  const [visible, setVisible] = useState([false, false, false, false]);

  useEffect(() => {
    const timers = stats.map((_, i) =>
      setTimeout(() => {
        setVisible(prev => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }, 150 + i * 120)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <>

      <section className="stats-band">
        <div className="stats-inner-rule" />

        <div className="container">

          {/* stats row */}
          <div className="row">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`stat-col${visible[i] ? " visible" : ""}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="stat-item">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-divider" />
                  <div className="stat-label">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Stats;