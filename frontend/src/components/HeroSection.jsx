import React, { useRef, useLayoutEffect, useState, useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import SplitType from 'split-type'
import Navbar from './Navbar.jsx'
import { useNavigate } from 'react-router'

const HeroSection = () => {
  const navigate = useNavigate();
  const handleHeroClick = () => {
    navigate('/all-cafes');
  }
  const [vis, setVis] = useState(false);
 const headlineLines = [
  "Where Every",
  <><em key="e">Date</em> Becomes</>,
  "a Memory",
];
const delays = [0.38, 0.52, 0.66];
  useEffect(() => {
    const t = setTimeout(() => setVis(true), 60);
    return () => clearTimeout(t);
  }, []);
 
  const v = (extra = "") => (vis ? `vis ${extra}` : extra);
 
  return (
    <>
    <Navbar />
      <section className="df-hero">
 
        {/* Watermark */}
        <div className="df-watermark">
          <span className={`df-watermark-text ${vis ? "vis" : ""}`}>DATEFLYX</span>
        </div>
 
        {/* ── Left ── */}
        <div className="df-col-left">
          {[
            { num: "240+", label: "Curated Venues" },
            { num: "12", label: "Date Categories" },
          ].map(({ num, label }, i) => (
            <div
              key={i}
              className={`df-stat ${vis ? "vis" : ""}`}
              style={{ transitionDelay: `${0.45 + i * 0.15}s` }}
            >
              <div className="df-stat-number">{num}</div>
              <div className="df-stat-rule" />
              <div className="df-stat-label">{label}</div>
            </div>
          ))}
          <p className={`df-left-tagline ${vis ? "vis" : ""}`}>
            Crafted moments for<br />two, done right.
          </p>
        </div>
 
        {/* ── Center ── */}
        <div className="df-col-center">
          <span className={`df-eyebrow ${vis ? "vis" : ""}`}>
            Premium Date Planning &nbsp;·&nbsp; Est. 2024
          </span>
 
          <h1 className="df-headline">
            {headlineLines.map((line, i) => (
              <span className="df-headline-line" key={i}>
                <span
                  className={`df-headline-inner ${vis ? "vis" : ""}`}
                  style={{ transitionDelay: `${delays[i]}s` }}
                >
                  {line}
                </span>
              </span>
            ))}
          </h1>
 
          <div className={`df-gold-rule ${vis ? "vis" : ""}`} />
 
          <p className={`df-sub ${vis ? "vis" : ""}`}>
            DateFlyx handpicks the finest dining, experiences, and escapes —
            so you arrive with intention, and leave with a story worth telling.
          </p>
 
          <div className={`df-cta-row ${vis ? "vis" : ""}`}>
            <button className="df-btn-ghost" onClick={handleHeroClick}>
              Explore Venues <span className="df-arrow">→</span>
            </button>
          </div>
        </div>
 
        {/* ── Right ── */}
        <div className="df-col-right">
          <div className={`df-hours ${vis ? "vis" : ""}`}>
            <div className="df-hours-label">We're Open</div>
            <div className="df-hours-time">
              Mon – Fri &nbsp;9:00 — 22:00<br />
              Weekends until 23:00
            </div>
          </div>
        </div>
 
      </section>
    </>
  );
}

export default HeroSection