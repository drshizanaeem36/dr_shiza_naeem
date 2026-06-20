import React, { useEffect, useRef, useState } from "react";

/**
 * LoadingScreen — brand boot sequence for Dr. Shiza Naeem
 * Plastic & Aesthetic Surgeon · Rose Gold / Midnight identity
 *
 * Sequence:
 *   1. Monogram ring draws itself in (a seal closing, not a generic spinner)
 *   2. Three words cross-fade one at a time: Precision · Artistry · Compassion
 *   3. The full logo lockup settles in with the signature shimmer
 *   4. A hairline progress rule fills beneath, then the whole screen recedes
 *
 * USAGE — two ways to drive it from a parent (e.g. App.jsx):
 *
 *   A) Let it tell you when it's done:
 *      const [loaded, setLoaded] = useState(false);
 *      <LoadingScreen hidden={loaded} onReady={() => setLoaded(true)} />
 *
 *   B) Drive it with your own timer (mirrors a classic boot-screen pattern):
 *      useEffect(() => {
 *        const t = setTimeout(() => setLoaded(true), 3400);
 *        return () => clearTimeout(t);
 *      }, []);
 *      <LoadingScreen hidden={loaded} />
 *
 * FONTS — this brand uses Cinzel, Cormorant Garamond, and Raleway.
 * For best results add this to your index.html <head> (avoids flash-of-
 * unstyled-text); a CSS @import fallback is included below regardless:
 *   <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Cinzel:wght@400;500;600&family=Raleway:wght@200;300;400&display=swap" rel="stylesheet">
 */

const WORDS = ["Confidence", "Refinement", "Precision"];
const WORD_INTERVAL = 1200; // ms each word holds the stage
const RING_DURATION = 1500; // ms for the monogram ring to draw closed
const READY_DELAY = WORDS.length * WORD_INTERVAL + 1800; // total time until settled

export default function LoadingScreen({ hidden = false, onReady }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [showLogo, setShowLogo] = useState(false);
  const firedReady = useRef(false);

  useEffect(() => {
    const timers = [];

    WORDS.forEach((_, i) => {
      timers.push(setTimeout(() => setWordIndex(i), i * WORD_INTERVAL + 200));
    });

    timers.push(
      setTimeout(() => setShowLogo(true), WORDS.length * WORD_INTERVAL + 200)
    );

    timers.push(
      setTimeout(() => {
        if (!firedReady.current) {
          firedReady.current = true;
          onReady && onReady();
        }
      }, READY_DELAY)
    );

    return () => timers.forEach(clearTimeout);
  }, [onReady]);

  return (
    <div
      className={`sn-loading${hidden ? " sn-loading--hidden" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Loading Dr. Shiza Naeem"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Cinzel:wght@400;500;600&family=Raleway:wght@200;300;400&display=swap');

        .sn-loading {
          --sn-black: #080808;
          --sn-deep: #111010;
          --sn-rose: #c9956c;
          --sn-rose-light: #e8c4a8;
          --sn-rose-dark: #9a6b48;
          --sn-cream: #f8f0e8;

          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--sn-black);
          overflow: hidden;
          opacity: 1;
          visibility: visible;
          transition: opacity 0.7s ease, visibility 0s linear 0s;
        }

        .sn-loading--hidden {
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transition: opacity 0.7s ease, visibility 0s linear 0.7s;
        }

        .sn-loading__corner {
          position: absolute;
          width: 46px;
          height: 46px;
          border-color: var(--sn-rose);
          border-style: solid;
          opacity: 0.7;
        }
        .sn-loading__corner--tl { top: 28px; left: 28px; border-width: 1px 0 0 1px; }
        .sn-loading__corner--br { bottom: 28px; right: 28px; border-width: 0 1px 1px 0; }

        .sn-loading__glow {
          position: absolute;
          width: 520px;
          height: 520px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(201,149,108,0.10) 0%, transparent 70%);
          pointer-events: none;
        }

        .sn-loading__pattern {
          position: absolute;
          inset: 0;
          background-image: repeating-linear-gradient(
            45deg, transparent, transparent 30px,
            rgba(201,149,108,0.025) 30px, rgba(201,149,108,0.025) 31px
          );
          pointer-events: none;
        }

        .sn-loading__content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        /* ── Monogram ring ── */
        .sn-loading__ring {
          position: relative;
          width: 130px;
          height: 130px;
          margin-bottom: 30px;
        }
        .sn-loading__ring-svg {
          width: 100%;
          height: 100%;
          transform: rotate(-90deg);
        }
        .sn-loading__ring-track {
          fill: none;
          stroke: rgba(201,149,108,0.16);
          stroke-width: 1;
        }
        .sn-loading__ring-draw {
          fill: none;
          stroke: var(--sn-rose);
          stroke-width: 1;
          stroke-linecap: round;
          stroke-dasharray: 327;
          stroke-dashoffset: 327;
          animation: snRingDraw ${RING_DURATION}ms cubic-bezier(0.65, 0, 0.35, 1) forwards;
        }
        .sn-loading__monogram {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Cinzel', serif;
          font-size: 26px;
          letter-spacing: 2px;
          color: var(--sn-rose-light);
          opacity: 0;
          animation: snFadeIn 900ms ease forwards;
          animation-delay: ${RING_DURATION - 200}ms;
        }

        /* ── Word stage ── */
        .sn-loading__word-stage {
          height: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 8px;
        }
        .sn-loading__word {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-weight: 400;
          font-size: 17px;
          letter-spacing: 3px;
          color: var(--sn-rose-light);
          animation: snWordCycle ${WORD_INTERVAL}ms ease forwards;
          white-space: nowrap;
        }

        /* ── Logo lockup ── */
        .sn-loading__logo {
          margin-top: 22px;
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.9s ease, transform 0.9s ease;
        }
        .sn-loading__logo.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .sn-loading__divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin-bottom: 20px;
        }
        .sn-loading__line {
          width: 60px;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--sn-rose), transparent);
        }
        .sn-loading__diamond {
          width: 5px;
          height: 5px;
          background: var(--sn-rose);
          transform: rotate(45deg);
          flex-shrink: 0;
        }
        .sn-loading__dr {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: 12px;
          letter-spacing: 7px;
          color: var(--sn-rose);
          text-transform: uppercase;
          margin-bottom: 4px;
        }
        .sn-loading__name {
          font-family: 'Cinzel', serif;
          font-weight: 500;
          font-size: 30px;
          letter-spacing: 4px;
          line-height: 1;
          margin-bottom: 10px;
          background: linear-gradient(90deg, #fff 30%, var(--sn-rose-light) 50%, #fff 70%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: snShimmer 5s linear infinite;
        }
        .sn-loading__specialty {
          font-family: 'Raleway', sans-serif;
          font-weight: 300;
          font-size: 9px;
          letter-spacing: 4px;
          color: var(--sn-rose-light);
          text-transform: uppercase;
        }

        /* ── Progress hairline ── */
        .sn-loading__track {
          position: absolute;
          bottom: 60px;
          left: 50%;
          transform: translateX(-50%);
          width: 160px;
          height: 1px;
          background: rgba(201,149,108,0.15);
          overflow: hidden;
        }
        .sn-loading__bar {
          height: 100%;
          width: 0%;
          background: linear-gradient(90deg, var(--sn-rose-dark), var(--sn-rose), var(--sn-rose-light));
          animation: snBarFill ${READY_DELAY}ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        /* ── Keyframes ── */
        @keyframes snRingDraw {
          to { stroke-dashoffset: 0; }
        }
        @keyframes snFadeIn {
          to { opacity: 1; }
        }
        @keyframes snWordCycle {
          0%   { opacity: 0; transform: translateY(4px); }
          18%  { opacity: 1; transform: translateY(0); }
          78%  { opacity: 1; }
          100% { opacity: 0; transform: translateY(-4px); }
        }
        @keyframes snShimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes snBarFill {
          to { width: 100%; }
        }

        @media (prefers-reduced-motion: reduce) {
          .sn-loading__ring-draw { animation: none; stroke-dashoffset: 0; }
          .sn-loading__monogram { animation: none; opacity: 1; }
          .sn-loading__word { animation: none; opacity: 1; }
          .sn-loading__name { animation: none; }
          .sn-loading__bar { animation: none; width: 100%; }
        }

        @media (max-width: 480px) {
          .sn-loading__ring { width: 104px; height: 104px; }
          .sn-loading__name { font-size: 24px; letter-spacing: 3px; }
          .sn-loading__corner { width: 32px; height: 32px; }
        }
      `}</style>

      <div className="sn-loading__corner sn-loading__corner--tl" />
      <div className="sn-loading__corner sn-loading__corner--br" />
      <div className="sn-loading__glow" />
      <div className="sn-loading__pattern" />

      <div className="sn-loading__content">
        <div className="sn-loading__ring">
          <svg viewBox="0 0 120 120" className="sn-loading__ring-svg">
            <circle className="sn-loading__ring-track" cx="60" cy="60" r="52" />
            <circle className="sn-loading__ring-draw" cx="60" cy="60" r="52" />
          </svg>
          <span className="sn-loading__monogram">SN</span>
        </div>

        <div className="sn-loading__word-stage">
          <span key={wordIndex} className="sn-loading__word">
            {WORDS[wordIndex]}
          </span>
        </div>

        <div className={`sn-loading__logo${showLogo ? " is-visible" : ""}`}>
          <div className="sn-loading__divider">
            <span className="sn-loading__line" />
            <span className="sn-loading__diamond" />
            <span className="sn-loading__line" />
          </div>
          <div className="sn-loading__dr">Dr.</div>
          <div className="sn-loading__name">Shiza Naeem</div>
          <div className="sn-loading__specialty">Plastic, Reconstructive Surgery &amp; Aesthetic Surgeon</div>
        </div>
      </div>

      <div className="sn-loading__track">
        <div className="sn-loading__bar" />
      </div>
    </div>
  );
}
