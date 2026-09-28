import React from 'react';
import burgundyStroke from '../assets/pinceladaVinho.png';
import heroPortrait from '../assets/hero_portrait.png';

const Hero = () => {
  return (
    <section id="hero" className="theme-dark">
      <div className="grid-asymmetric-hero">
        <div className="hero-text-side">
          <span className="section-label">Portfólio & Currículo</span>
          <h1 className="editorial-headline">
            Front-end Developer <br />
            <em>& UI Designer</em>
          </h1>
          <p className="lead-paragraph">
            Do conceito à interface, transformo ideias em experiências digitais.
          </p>
          <div className="cta-group">
            <a href="#projetos" className="btn-primary">Ver Projetos</a>
            <a href="#sobre" className="btn-secondary">Sobre Mim</a>
          </div>
        </div>

        <div className="hero-image-side">
          {/* Burgundy brush stroke behind the portrait */}
          <div className="hero-combined-strokes" aria-hidden="true">
            <div className="hero-stroke-wine">
              <img src={burgundyStroke} alt="" className="stroke-img" />
            </div>
          </div>

          <div className="hero-portrait-frame">
            <img src={heroPortrait} alt="Regina Cupa - Retrato Editorial" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
