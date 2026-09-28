import React from 'react';
import WhatsAppFloat from './WhatsAppFloat';

const Contact = () => {
  return (
    <section id="contato" className="theme-dark">
      <div className="contact-container">
        <div className="contact-info-side">
          <span className="section-label">Contato</span>
          <h2 className="editorial-headline" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '24px' }}>
            Vamos <br />
            <em>conversar?</em>
          </h2>
          <p className="lead-paragraph" style={{ maxWidth: '480px', marginBottom: '0' }}>
            Tem uma ideia, um projeto ou uma oportunidade em mente? Vamos conversar sobre como posso contribuir com design e desenvolvimento para transformá-la em realidade.
          </p>
        </div>

        <div className="contact-links-side">
          <a href="mailto:reginacupa@gmail.com" className="contact-link-item">
            <div className="contact-icon-wrapper">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div className="contact-link-text">
              <h4>E-mail Profissional</h4>
              <p>reginacupa@gmail.com</p>
            </div>
          </a>

          <a href="https://github.com/reginacupa" target="_blank" rel="noopener noreferrer" className="contact-link-item">
            <div className="contact-icon-wrapper">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </div>
            <div className="contact-link-text">
              <h4>GitHub</h4>
              <p>github.com/reginacupa</p>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/regina-celia-cupa-27557566/" target="_blank" rel="noopener noreferrer" className="contact-link-item">
            <div className="contact-icon-wrapper">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </div>
            <div className="contact-link-text">
              <h4>LinkedIn</h4>
              <p>linkedin.com/in/regina-celia-cupa</p>
            </div>
          </a>
        </div>
      </div>

      <WhatsAppFloat />

      <footer className="footer-credits">
        <p>© {new Date().getFullYear()} Regina Cupa · Todos os direitos reservados</p>
      </footer>
    </section>
  );
};

export default Contact;
