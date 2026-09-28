import React from 'react';
import orquidarioImg from '../assets/orquidarioLilas.png';
import bikcraftImg from '../assets/bikcraft.png';
import caotinhoImg from '../assets/caotinhoFeliz.png';
import rodoSOSImg from '../assets/rodoSOS.png';

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
