"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./PatriceHero.module.css";

/**
 * Tilda-style: blue animates in behind the color gradient at the same time; on scroll the blue
 * expands to occupy the viewport (like tn-elem 1555592732508). Gradient = bar (1555570485788).
 * Letter reveal matches /accessibility hero: scroll-driven over a long range (Tilda uses ~1000–1400px).
 */
const SCROLL_RANGE_VH = 120;
const BLUE_SCROLL_RANGE_VH = 80;
const WORD_TRAVEL_VW = 120;
const LETTER_START_FRACTION = 0.02;

export function PatriceHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [blueProgress, setBlueProgress] = useState(0);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const update = () => {
      const sectionTop = section.getBoundingClientRect().top;
      const vh = window.innerHeight;
      if (sectionTop > 0) {
        setScrollProgress(0);
        setBlueProgress(0);
        return;
      }
      setScrollProgress(Math.min(1, -sectionTop / (SCROLL_RANGE_VH * vh)));
      setBlueProgress(Math.min(1, -sectionTop / (BLUE_SCROLL_RANGE_VH * vh)));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  /* Letters slide in as you scroll (Tilda: words animate over ~1400px). Start after a small scroll so blue is visible. */
  const letterStart = LETTER_START_FRACTION;
  const letterProgress =
    scrollProgress <= letterStart ? 0 : (scrollProgress - letterStart) / (1 - letterStart);
  /* Always mount overlay so z-index/stacking works; visibility tied to scroll so we don't flash off-screen text. */
  const showLetters = scrollProgress > letterStart - 0.01;

  /* Lumumba starts well after Patrice so they don't look smooshed. */
  const lumumbaStart = 0.55;
  const lumumbaProgress =
    letterProgress <= lumumbaStart
      ? 0
      : (letterProgress - lumumbaStart) / (1 - lumumbaStart);

  /* Blue expands more slowly over a longer scroll range. */
  const blueScaleY = 1 + blueProgress * 5;

  return (
    <section
      ref={sectionRef}
      className={styles.wrapper}
      aria-label="Hero"
    >
      {/* Blue behind gradient: animates in with bar (same time), then expands to fill viewport on scroll. */}
      <div
        className={styles.blueBehindGradient}
        aria-hidden
        style={{
          transform: `scaleY(${blueScaleY})`,
          zIndex: blueProgress > 0 ? 1 : 0,
        }}
      />
      <div className={styles.heroBlock}>
        <div className={styles.bar} />
        <div
          className={styles.portraitPointing}
          role="img"
          aria-label="Portrait"
        />
        <div
          className={styles.portraitSmiling}
          role="img"
          aria-label="Portrait"
        />
        <div
          className={styles.portrait}
          role="img"
          aria-label="Portrait"
        />
      </div>

      {/* Fills the rest of the first viewport so blue is not visible on load; blue appears only as you scroll. */}
      <div className={styles.belowHeroFiller} aria-hidden />
      <div className={styles.blueSection} aria-hidden />

      <div className={styles.scrollSpacer} aria-hidden />

      {mounted &&
        createPortal(
          <div
            className={styles.scrollTextOverlay}
            aria-hidden
            style={{
              opacity: showLetters ? 1 : 0,
              visibility: showLetters ? "visible" : "hidden",
            }}
          >
            <div
              className={styles.scrollTextLeft}
              style={{
                transform: `translateX(${-WORD_TRAVEL_VW + letterProgress * 2 * WORD_TRAVEL_VW}vw)`,
              }}
            >
              Patrice
            </div>
            <div
              className={styles.scrollTextRight}
              style={{
                transform: `translateX(${WORD_TRAVEL_VW - lumumbaProgress * 2 * WORD_TRAVEL_VW}vw)`,
              }}
            >
              Lumumba
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}
