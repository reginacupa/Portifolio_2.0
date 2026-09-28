import React from 'react';

const skillsGroups = [
  {
    title: 'Front-End',
    items: [
      { name: 'HTML5 / CSS3', detail: 'Avançado' },
      { name: 'JavaScript ES6+', detail: 'Profissional' },
      { name: 'React', detail: 'Componentes' },
      { name: 'Tailwind CSS', detail: 'Estilo' },
      { name: 'Bootstrap', detail: 'Grid' }
    ]
  },
  {
    title: 'UI / Interface',
    items: [
      { name: 'UI Design', detail: 'Estética' },
      { name: 'UX Design', detail: 'Fluxos' },
      { name: 'Figma', detail: 'Protótipos' },
      { name: 'Design Responsivo', detail: 'Mobile' },
      { name: 'IA Designer', detail: 'Web Designer' }
    ]
  },
  {
    title: 'Workflow & Tools',
    items: [
      { name: 'Git & GitHub', detail: 'Versões' },
      { name: 'IA Designer', detail: 'Web Designer' },
      { name: 'Vibe Coding', detail: 'Aplicações com IA' },
      { name: 'Google Meu Negócio', detail: 'SEO Local' },
      { name: 'Google Maps API', detail: 'Localização' }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="theme-light" style={{ borderTop: '1px solid rgba(0,0,0,0.05)' }}>
      <span className="section-label">Competências</span>
      <h2 className="editorial-headline" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '40px' }}>
        Habilidades <em>Técnicas</em>
      </h2>
      
      <div className="skills-container">
        {skillsGroups.map((group, index) => (
          <div key={index} className="skills-column">
            <h3 className="skills-column-title">{group.title}</h3>
            <ul className="skills-list">
              {group.items.map((skill, i) => (
                <li key={i} className="skills-item">
                  <span className="skills-item-name">{skill.name}</span>
                  <span>{skill.detail}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
