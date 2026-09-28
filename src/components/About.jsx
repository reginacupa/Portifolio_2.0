import React from 'react';

const About = () => {
  return (
    <section id="sobre" className="theme-light">
      <div className="grid-about">
        <div className="about-headline-container">
          <span className="section-label">A Filosofia</span>
          <h2 className="about-editorial-headline">
            Entre o <br />
            design e o <br />
            <em>código.</em>
          </h2>
        </div>

        <div className="about-text-column">
          <p className="lead-paragraph">
            Sou empreendedora digital determinada e qualificada para apoiar pequenas e médias empresas na sua transição e inclusão digital. 
          </p>
          <p className="body-paragraph">
            Minha especialização em <strong>Design UI/UX</strong> combinada com a formação técnica em <strong>Desenvolvimento Full-Stack</strong> me permite atuar com visão holística nas aplicações web. Acredito que a estética sofisticada e o rigor técnico andam de mãos dadas.
          </p>
          <p className="body-paragraph">
            Auxilio negócios locais a se destacarem e se profissionalizarem no ambiente online por meio do <strong>desenvolvimento de sites responsivos</strong>, otimização no <strong>Google Meu Negócio</strong> e <strong>Google Maps</strong>, além de implementar soluções eficientes de chat e automações no <strong>WhatsApp</strong>.
          </p>
          <p className="body-paragraph">
            Meu objetivo é transformar a presença online das marcas em uma experiência moderna, elegante, funcional e verdadeiramente estratégica.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
