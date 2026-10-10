# Regina Cupa — Portfólio Editorial & Currículo Digital

Portfólio profissional e currículo interativo de **Regina Cupa**, desenvolvido na interseção entre design visual refinado e engenharia de software moderna. A interface é concebida a partir de uma direção de arte editorial contemporânea (inspiração em publicações premium e ritmo visual sofisticado), combinando alto contraste, tipografia elegante e elementos gráficos expressivos.

---

## 📖 Visão Geral

O projeto foi construído utilizando **React** e **Vite**, estruturado em componentes modulares, responsivos e de alto desempenho. A aplicação oferece uma experiência imersiva e fluida para recrutadores e clientes.

### Destaques e Funcionalidades
* **Direção de Arte Editorial:** Paleta sofisticada com *Ink Black*, *Warm Ivory*, pinceladas em *Burgundy* e detalhes refinados em *Aged Gold*.
* **Carrossel Editorial Horizontal:** Navegação horizontal suave para os oito projetos em destaque, baseada em **CSS Scroll Snap** nativo (`scroll-snap-type: x mandatory`).
* **Experiência de Navegação Intuitiva:**
  * Apresentação focada de um projeto completo por vez.
  * Setas laterais discretas com desabilitação automática nos limites.
  * Indicador numérico dinâmico de posição (`01 / 08` a `08 / 08`).
  * Indicadores clicáveis para acesso direto a qualquer projeto.
  * Suporte multiplataforma: gestos de toque/swipe no mobile e tablet, rolagem por trackpad/mouse no desktop e navegação acessível por teclado (setas `←` e `→`).
  * **Livre Scroll Vertical:** A rolagem vertical principal da página permanece 100% desimpedida.
* **Alternância de Tema:** Transição dinâmica e harmoniosa de fundo e contraste entre temas claros e escuros conforme o projeto ativo ou a seção em visualização.
* **Arquitetura Leve e Nativa:** Recursos construídos sem bibliotecas externas pesadas, preservando velocidade de carregamento e acessibilidade.

---

## 🛠️ Tecnologias Utilizadas

* **React 19** — Biblioteca para construção de interfaces orientadas a componentes.
* **Vite** — Build tool e ambiente de desenvolvimento ultrarrápido.
* **CSS3 Moderno** — CSS Scroll Snap, CSS Grid, Flexbox, Custom Properties e transições nativas.
* **Oxlint** — Linter de alta performance para validação e qualidade de código.
* **GitHub Actions** — Pipeline automatizado de integração contínua e deploy no GitHub Pages.

---

## 📁 Estrutura do Projeto

```text
Portifolio_2.0/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Pipeline CI/CD para GitHub Pages
├── docs/                       # Documentação de briefing e design system
├── public/
│   └── RE-favcon.svg           # Favicon vetorial da aplicação
├── src/
│   ├── assets/                 # Capas dos projetos, fotos e pinceladas
│   ├── components/
│   │   ├── About.jsx           # Seção sobre a profissional e filosofia
│   │   ├── Contact.jsx         # Seção de contato e links
│   │   ├── Education.jsx       # Formação acadêmica e certificações
│   │   ├── Header.jsx          # Barra de navegação fixa com blur
│   │   ├── Hero.jsx            # Apresentação inicial e chamada de ação
│   │   ├── Projects.jsx        # Carrossel editorial horizontal dos 8 projetos
│   │   ├── Skills.jsx          # Competências técnicas e ferramentas
│   │   └── WhatsAppFloat.jsx   # Botão flutuante de atendimento WhatsApp
│   ├── App.css                 # Estilos globais e componentes do design system
│   ├── App.jsx                 # Composição principal e controle de tema dinâmico
│   ├── index.css               # Reset, tipografias e variáveis base
│   └── main.jsx                # Ponto de entrada do React
├── .gitignore                  # Arquivos e diretórios ignorados pelo Git
├── .oxlintrc.json              # Configurações do Oxlint
├── index.html                  # HTML base da aplicação
├── package.json                # Manifesto de dependências e scripts npm
├── package-lock.json           # Lockfile determinístico de dependências
├── vite.config.js              # Configuração do Vite e base path
└── README.md                   # Documentação oficial do projeto
```

---

## 🚀 Instalação e Execução Local

### Pré-requisitos
* **Node.js** (versão 18 ou superior)
* **npm** (gerenciador de pacotes incluso no Node.js)

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/reginacupa/Portifolio_2.0.git
   cd Portifolio_2.0
   ```

2. **Instale as dependências (instalação limpa e reproduzível):**
   ```bash
   npm ci
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Acesse o endereço exibido no terminal (geralmente `http://localhost:5173/Portifolio_2.0/`).

4. **Verificação de qualidade de código (Lint):**
   ```bash
   npm run lint
   ```

---

## 📦 Build e Preparação para Deploy

Para gerar a versão otimizada de produção:

```bash
npm run build
```

Os arquivos compilados, minificados e otimizados serão gerados no diretório `/dist`.

Para pré-visualizar localmente o build gerado:
```bash
npm run preview
```

---

## 🌐 Instruções de Deploy

O projeto está configurado para deploy contínuo:

### GitHub Pages (Configurado)
O repositório inclui um workflow em `.github/workflows/deploy.yml` que compila o projeto com `npm ci` e `npm run build`, publicando automaticamente a pasta `dist` no GitHub Pages a cada push na branch `main`.

* **Base Path:** O `vite.config.js` está configurado com `base: '/Portifolio_2.0/'`, garantindo que assets, scripts e fontes sejam resolvidos corretamente no GitHub Pages.

### Outras Plataformas (Vercel / Netlify)
Caso opte por hospedar em plataformas com domínio raiz próprio:
* **Build Command:** `npm run build`
* **Output Directory:** `dist`
* *Nota:* Ajuste a propriedade `base` em `vite.config.js` para `'/'` caso utilize domínio customizado na raiz.

---

## ⚖️ Licença

Projeto pessoal e autoral desenvolvido por **Regina Cupa**. Todos os direitos reservados.
