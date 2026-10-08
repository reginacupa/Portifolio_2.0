import React from 'react';
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
  return (
    <div id="projetos">
      {projectsData.map((project, index) => (
        <section key={index} className={`${project.theme}`}>
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
                  />
                  <div className="project-badge-visit">
                    <span>VISITAR PROJETO ↗</span>
                  </div>
                </div>
              </a>
            </div>

          </div>
        </section>
      ))}
    </div>
  );
};

export default Projects;
