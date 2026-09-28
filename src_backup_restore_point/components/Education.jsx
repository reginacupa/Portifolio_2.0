import React from 'react';

const educationData = [
  {
    year: 'Pós-Grad',
    degree: 'Desenvolvimento Full-Stack',
    type: 'Pós-Graduação Especializada',
    institution: 'PUC-RJ (Pontifícia Universidade Católica do Rio de Janeiro)'
  },
  {
    year: 'Técnico',
    degree: 'UI / UX Design',
    type: 'Especialização em Interfaces',
    institution: 'Origamid.com'
  },
  {
    year: 'Tecnólogo',
    degree: 'Gestão Financeira',
    type: 'Graduação Tecnológica',
    institution: 'Anhanguera Educacional'
  }
];

const extraCourses = [
  { name: 'HTML / CSS avançado', hours: '120h' },
  { name: 'JavaScript Moderno', hours: '40h' },
  { name: 'Git & Git Workflow', hours: '05h' }
];

const languages = [
  { name: 'Inglês', level: '/ Intermediário' },
  { name: 'Espanhol', level: '/ Básico' },
  { name: 'Francês', level: '/ Básico' }
];

const Education = () => {
  return (
    <section id="formacao" className="theme-light" style={{ borderTop: '1px solid rgba(0,0,0,0.05)', paddingBottom: '140px' }}>
      <span className="section-label">Jornada Acadêmica</span>
      <h2 className="editorial-headline" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '40px' }}>
        Formação & <em>Estudo</em>
      </h2>

      <div className="grid-education">
        <div className="timeline">
          {educationData.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-content">
                <span className="timeline-type">{item.type}</span>
                <h3 className="timeline-degree">{item.degree}</h3>
                <p className="timeline-institution">{item.institution}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="education-extras">
          <div className="extras-card">
            <div className="project-corner-bracket bracket-tl"></div>
            <div className="project-corner-bracket bracket-tr"></div>
            <div className="project-corner-bracket bracket-bl"></div>
            <div className="project-corner-bracket bracket-br"></div>
            
            <h3>Cursos Extra-Curriculares</h3>
            <ul className="extras-list">
              {extraCourses.map((course, i) => (
                <li key={i} className="extras-item">
                  {course.name} <span>{course.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="extras-card" style={{ marginTop: '20px' }}>
            <div className="project-corner-bracket bracket-tl"></div>
            <div className="project-corner-bracket bracket-tr"></div>
            <div className="project-corner-bracket bracket-bl"></div>
            <div className="project-corner-bracket bracket-br"></div>
            
            <h3>Idiomas</h3>
            <ul className="extras-list">
              {languages.map((lang, i) => (
                <li key={i} className="extras-item">
                  {lang.name} <span>{lang.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
