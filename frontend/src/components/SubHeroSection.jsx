import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const SubHeroSection = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const headings = sectionRef.current.querySelectorAll(".sub-tags h4");
    const allChars = [];
    const splitInstances = [];

    headings.forEach((heading) => {
      const split = new SplitType(heading, {
        types: "chars",
      });

      splitInstances.push(split);
      allChars.push(...split.chars);
    });

    const tween = gsap.fromTo(
      allChars,
      { color: "#C3C2C1" },
      {
        color: "#111111",
        stagger: 0.02,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 54%",
          end: "top 0%",
          scrub: true
        },
      }
    );

    return () => {
      if (tween.scrollTrigger) tween.scrollTrigger.kill();
      tween.kill();
      splitInstances.forEach((split) => split.revert());
    };
  }, []);

  return (
    <div className="sub-hero-section" ref={sectionRef}>
      <div className="contents">
        <div className="tagline">
          <h3>[Find, Connect, Date]</h3>
        </div>

        <section className="sub-tags">
          <h4>
            Find cozy cafés, create memorable moments, and make every date
            special.
          </h4>
          <h4>
            Dateflyx helps you find charming cafés that turn simple meetups
            into lasting memories
          </h4>
        </section>
      </div>

      <div className="explore-btn">
        <button>Explore Cafes</button>
      </div>
    </div>
  );
};

export default SubHeroSection;