import React, { useEffect, useRef } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

const DARK_RGB = [13, 13, 15];      // #0D0D0F (Ink Black)
const LIGHT_RGB = [237, 232, 227];  // #EDE8E3 (Warm Ivory)

function easeInOut(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

function interpolateRgb(c1, c2, t) {
  const clamped = Math.max(0, Math.min(1, t));
  const e = easeInOut(clamped);
  return [
    Math.round(c1[0] + (c2[0] - c1[0]) * e),
    Math.round(c1[1] + (c2[1] - c1[1]) * e),
    Math.round(c1[2] + (c2[2] - c1[2]) * e)
  ];
}

function App() {
  const bgRef = useRef(null);

  useEffect(() => {
    const bgEl = bgRef.current;
    if (!bgEl) return;

    let ticking = false;

    const getColorAtViewportY = (viewportY, sectionData, vh) => {
      const count = sectionData.length;
      if (count === 0) return DARK_RGB;

      const range = vh * 0.65; // Transition breadth tied to scroll

      for (let i = 0; i < count - 1; i++) {
        const seam = sectionData[i + 1].top;
        const colorA = sectionData[i].color;
        const colorB = sectionData[i + 1].color;

        // If both sections share the same theme, no color shift
        if (colorA[0] === colorB[0] && colorA[1] === colorB[1] && colorA[2] === colorB[2]) {
          if (viewportY < seam) {
            return colorA;
          }
          continue;
        }

        const startTransition = seam - range / 2; // upper boundary on screen (lower Y)
        const endTransition = seam + range / 2;   // lower boundary on screen (higher Y)

        if (viewportY < startTransition) {
          // viewport is above this seam: stays in section i
          return colorA;
        } else if (viewportY > endTransition) {
          // viewport is below this seam: move to next section
          continue;
        } else {
          // viewport is within the transition zone: interpolate smoothly
          const progress = (viewportY - startTransition) / range;
          return interpolateRgb(colorA, colorB, progress);
        }
      }

      return sectionData[count - 1].color;
    };

    const updateBackground = () => {
      ticking = false;
      const sections = Array.from(document.querySelectorAll('main section'));
      if (sections.length === 0) return;

      const vh = window.innerHeight || 800;
      const sectionData = sections.map(sec => ({
        top: sec.getBoundingClientRect().top,
        color: sec.classList.contains('theme-light') ? LIGHT_RGB : DARK_RGB
      }));

      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (prefersReduced) {
        const center = getColorAtViewportY(vh * 0.5, sectionData, vh);
        const rgbStr = `rgb(${center[0]}, ${center[1]}, ${center[2]})`;
        bgEl.style.background = rgbStr;
        document.body.style.backgroundColor = rgbStr;
      } else {
        const topColor = getColorAtViewportY(0, sectionData, vh);
        const bottomColor = getColorAtViewportY(vh, sectionData, vh);

        const isSame =
          topColor[0] === bottomColor[0] &&
          topColor[1] === bottomColor[1] &&
          topColor[2] === bottomColor[2];

        if (isSame) {
          const rgbStr = `rgb(${topColor[0]}, ${topColor[1]}, ${topColor[2]})`;
          bgEl.style.background = rgbStr;
          document.body.style.backgroundColor = rgbStr;
        } else {
          const topStr = `rgb(${topColor[0]}, ${topColor[1]}, ${topColor[2]})`;
          const bottomStr = `rgb(${bottomColor[0]}, ${bottomColor[1]}, ${bottomColor[2]})`;
          bgEl.style.background = `linear-gradient(to bottom, ${topStr}, ${bottomStr})`;
          const midColor = getColorAtViewportY(vh * 0.5, sectionData, vh);
          document.body.style.backgroundColor = `rgb(${midColor[0]}, ${midColor[1]}, ${midColor[2]})`;
        }
      }
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateBackground);
        ticking = true;
      }
    };

    updateBackground();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div className="portfolio-container">
      <div ref={bgRef} className="editorial-scroll-background" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;
