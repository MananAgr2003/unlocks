"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import $ from "jquery"; // Assuming you have jQuery installed
import "./timeline.css";

function AnimatedSection() {
  const lineRef = useRef(null);
  const lineWrapperRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const line = $(lineRef.current);
    const lineWrapper = $(lineWrapperRef.current);

    gsap.set(line, { transformOrigin: "center top", xPercent: -80, x: 0 });

    gsap.fromTo(
      line,
      {
        scaleY: 0,
      },
      {
        scaleY: 1,
        scrollTrigger: {
          trigger: lineWrapper,
          start: "top center", // Change start value to "top center"
          end: "+=300px", // Adjust end value as needed
          scrub: true,
        },
      }
    );

    // Cleanup function
    return () => {
      // Any cleanup code if necessary
    };
  }, []);

  return (
    <section className="section">
      <div className="container">
        <div
          className="section__wrapper position-relative"
          ref={lineWrapperRef}
        >
          <div className="section__line z-[1]" ref={lineRef}></div>
        </div>
      </div>
      <div className="spacer"></div>

      {/* CDN links */}
      <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
    </section>
  );
}

export default AnimatedSection;
