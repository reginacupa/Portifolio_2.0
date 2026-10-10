import React, { useState, useRef, useEffect, useCallback } from 'react';
import orquidarioImg from '../assets/orquidarioLilas.png';
import bikcraftImg from '../assets/bikcraft.png';
import caotinhoImg from '../assets/caotinhoFeliz.png';
import rodoSOSImg from '../assets/rodoSOS.png';
import newYorkImg from '../assets/New_york.png';
import gelatinaRoyalImg from '../assets/gelatina_Royal.png';
import ebookImg from '../assets/Ebook.png';
import animaisFantasticosImg from '../assets/animais_fantasticos.png';

const projectsData = [
  {
    number: '01',
    title: 'Orquidário Lilás 2.0',
    category: 'Boutique Digital / Full-Stack',
    description: 'Uma boutique digital de orquídeas que une atmosfera botânica e experiência de compra. Modernizei a interface, criei uma jornada visual com transições de cor e integrei a vitrine e o carrinho a uma API desenvolvida em Python.',
    techs: ['HTML', 'CSS', 'JavaScript', 'Python', 'Flask', 'SQLite'],
    image: orquidarioImg,
    link: 'https://reginacupa.github.io/OrquidarioLilas_2.0/',
    theme: 'theme-dark'
  },
  {
    number: '02',
    title: 'Bikcraft',
    category: 'Design & Front-End',
    description: 'Projeto de estudo que percorre o caminho do design à implementação. Da prototipagem no Figma ao desenvolvimento com HTML e CSS, trabalhei composição visual, hierarquia de informações e adaptação da interface a diferentes telas.',
    techs: ['Figma', 'HTML', 'CSS', 'JavaScript'],
    image: bikcraftImg,
    link: 'https://reginacupa.github.io/bikcraft/',
    theme: 'theme-light'
  },
  {
    number: '03',
    title: 'Cãotinho Feliz',
    category: 'Pet Care / Front-End',
    description: 'Site de apresentação para um pet shop fictício, com identidade visual acolhedora e bem-humorada. Organizei serviços, equipe e contato em uma navegação simples, pensada para aproximar a marca de quem ama seus pets.',
    techs: ['HTML', 'CSS', 'JavaScript'],
    image: caotinhoImg,
    link: 'https://reginacupa.github.io/Caotinho_Feliz/',
    theme: 'theme-dark'
  },
  {
    number: '04',
    title: 'RodoSOS',
    category: 'Aplicação Web / Demonstração',
    description: 'Aplicação web voltada a situações de emergência rodoviária. Desenvolvida com React e TypeScript, reúne abertura de chamados, captura de localização por GPS e recursos de comunicação em uma interface pensada para facilitar o pedido de ajuda.',
    techs: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Web APIs'],
    image: rodoSOSImg,
    link: 'https://reginacupa.github.io/RodoSOS/',
    theme: 'theme-light'
  },
  {
    number: '05',
    title: 'New York',
    category: 'Design & Front-End',
    description: 'Projeto de front-end inspirado na atmosfera de Nova York, com uma proposta visual imersiva que explora composição editorial, tipografia, imagens e navegação para transformar a descoberta da cidade em uma experiência digital.',
    techs: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
    image: newYorkImg,
    link: 'https://reginacupa.github.io/New_York/',
    theme: 'theme-dark'
  },
  {
    number: '06',
    title: 'Gelatina Royal',
    category: 'Experiência Interativa / Front-End',
    description:'Uma experiência interativa de front-end que explora animações com GSAP, transições entre sabores e efeitos visuais dinâmicos. O projeto combina criatividade, movimento e interatividade para transformar uma apresentação de produto em uma experiência digital envolvente.',
    techs: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
    image: gelatinaRoyalImg,
    link: 'https://reginacupa.github.io/GelatinaRoyal/',
    theme: 'theme-light'
  },
  {
    number: '07',
    title: 'Ebook VIP',
    category: 'Landing Page / Design & Front-End',
    description:'Uma landing page desenvolvida para apresentar um ebook sobre arquitetura de software na era do Vibe Coding. O projeto combina identidade visual contemporânea, hierarquia de informações e uma experiência de navegação intuitiva, explorando princípios de UI/UX, desenvolvimento front-end e estratégias de conversão.',
    techs: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
    image: ebookImg,
    link: 'https://reginacupa.github.io/Ebook-VIP/',
    theme: 'theme-dark'
  },
  {
    number: '08',
    title: 'Animais Fantásticos',
    category: 'Web Interativa / Front-End',
    description:'Projeto de front-end com uma proposta editorial e educativa sobre o universo dos animais. Explora a organização de conteúdo, a interação com JavaScript e a composição visual de imagens e tipografia para criar uma experiência de navegação envolvente.',
    techs: ['HTML', 'CSS', 'JavaScript'],
    image: animaisFantasticosImg,
    link: 'https://reginacupa.github.io/animais-fantasticos/',
    theme: 'theme-light'
  }
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef(null);
  const isProgrammaticScrollRef = useRef(false);
  const scrollTimeoutRef = useRef(null);

  const scrollToIndex = useCallback((index) => {
    if (index < 0 || index >= projectsData.length) return;
    const track = trackRef.current;
    if (!track) return;

    isProgrammaticScrollRef.current = true;
    setActiveIndex(index);

    const slides = track.querySelectorAll('.project-slide');
    const targetSlide = slides[index];
    const targetLeft = targetSlide ? targetSlide.offsetLeft : index * track.clientWidth;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    track.scrollTo({
      left: targetLeft,
      behavior: prefersReduced ? 'auto' : 'smooth'
    });

    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      isProgrammaticScrollRef.current = false;
    }, 750);
  }, []);

  const handlePrev = useCallback(() => {
    if (activeIndex > 0) {
      scrollToIndex(activeIndex - 1);
    }
  }, [activeIndex, scrollToIndex]);

  const handleNext = useCallback(() => {
    if (activeIndex < projectsData.length - 1) {
      scrollToIndex(activeIndex + 1);
    }
  }, [activeIndex, scrollToIndex]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
    }
  }, [handlePrev, handleNext]);

  // Sincroniza o slide ativo com scroll manual (swipe por toque ou trackpad)
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let ticking = false;

    const handleScroll = () => {
      if (isProgrammaticScrollRef.current) return;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!track) return;
          const scrollLeft = track.scrollLeft;
          const width = track.clientWidth;
          if (width > 0) {
            const calculatedIndex = Math.round(scrollLeft / width);
            const clampedIndex = Math.max(0, Math.min(projectsData.length - 1, calculatedIndex));
            setActiveIndex(clampedIndex);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    track.addEventListener('scroll', handleScroll, { passive: true });
    return () => track.removeEventListener('scroll', handleScroll);
  }, []);

  // Notifica o gerenciador de background editorial sobre a alternância de tema
  useEffect(() => {
    window.dispatchEvent(new Event('scroll'));
  }, [activeIndex]);

  const currentProject = projectsData[activeIndex];

  return (
    <section 
      id="projetos" 
      className={`projects-editorial-section ${currentProject.theme}`}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="Carrossel Editorial de Projetos"
      aria-roledescription="carousel"
    >
      {/* Barra Editorial Superior */}
      <div className="editorial-carousel-top-bar">
        <div className="carousel-top-meta">
          <span className="section-label">Projetos Selecionados</span>
          <span className="carousel-top-divider" aria-hidden="true">|</span>
          <span className="carousel-category-indicator">{currentProject.category}</span>
        </div>

        <div className="carousel-status-cluster">
          <div className="carousel-counter" aria-live="polite" aria-atomic="true">
            <span className="carousel-counter-current">{currentProject.number}</span>
            <span className="carousel-counter-separator">/</span>
            <span className="carousel-counter-total">0{projectsData.length}</span>
          </div>

          <div className="carousel-arrows-cluster">
            <button
              type="button"
              className="carousel-nav-arrow prev"
              onClick={handlePrev}
              disabled={activeIndex === 0}
              aria-label="Projeto anterior"
              title="Projeto anterior"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>
            <button
              type="button"
              className="carousel-nav-arrow next"
              onClick={handleNext}
              disabled={activeIndex === projectsData.length - 1}
              aria-label="Próximo projeto"
              title="Próximo projeto"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Trilho Horizontal com Scroll Snap e Setas Laterais Desktop */}
      <div className="projects-carousel-wrapper">
        <button
          type="button"
          className="carousel-side-nav-btn prev"
          onClick={handlePrev}
          disabled={activeIndex === 0}
          aria-label="Voltar para o projeto anterior"
          title="Projeto anterior"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <div className="projects-carousel-track" ref={trackRef}>
          {projectsData.map((project, index) => (
            <div 
              key={index} 
              className={`project-slide ${project.theme}`}
              role="group"
              aria-roledescription="slide"
              aria-label={`${project.number} de 08: ${project.title}`}
              aria-hidden={activeIndex !== index}
            >
              <div className={`project-item ${index % 2 !== 0 ? 'alternate' : ''}`}>
                <div className="project-meta-side">
                  <div className="project-number">{project.number}</div>
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description body-paragraph">
                    {project.description}
                  </p>
                  
                  <ul className="project-tech-list">
                    {project.techs.map((tech, i) => (
                      <li key={i} className="project-tech-tag">{tech}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-detail-side">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-image-link"
                    aria-label={`Visitar projeto ${project.title}`}
                    tabIndex={activeIndex === index ? 0 : -1}
                  >
                    <div className="project-detail-frame">
                      <div className="project-corner-bracket bracket-tl"></div>
                      <div className="project-corner-bracket bracket-tr"></div>
                      <div className="project-corner-bracket bracket-bl"></div>
                      <div className="project-corner-bracket bracket-br"></div>
                      
                      <img 
                        src={project.image} 
                        alt={`Composição editorial do projeto ${project.title}`} 
                        className="project-cover-image"
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                      <div className="project-badge-visit">
                        <span>VISITAR PROJETO ↗</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          className="carousel-side-nav-btn next"
          onClick={handleNext}
          disabled={activeIndex === projectsData.length - 1}
          aria-label="Avançar para o próximo projeto"
          title="Próximo projeto"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>

      {/* Indicadores Clicáveis Diretos de Navegação */}
      <div className="carousel-editorial-pagination" role="tablist" aria-label="Navegar diretamente pelos projetos">
        {projectsData.map((proj, idx) => (
          <button
            key={idx}
            type="button"
            role="tab"
            aria-selected={activeIndex === idx}
            aria-label={`Projeto ${proj.number}: ${proj.title}`}
            className={`carousel-pagination-pill ${activeIndex === idx ? 'active' : ''}`}
            onClick={() => scrollToIndex(idx)}
          >
            <span className="pagination-pill-num">{proj.number}</span>
            <span className="pagination-pill-bar"></span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Projects;
