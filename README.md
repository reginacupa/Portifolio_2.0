# Regina Cupa — Portfólio & Currículo Editorial

Este é o projeto de redesign do portfólio pessoal e currículo digital de Regina Cupa, desenvolvido na interseção entre design visual refinado e código moderno. O visual é inspirado em uma direção de arte editorial sofisticada (estilo Vogue/revista) com alto contraste, grandes espaços vazios e pinceladas de tinta expressivas.

---

## 📖 Visão Geral

O projeto foi reestruturado utilizando **React + Vite** com o objetivo de demonstrar alta competência técnica e de design para recrutadores e clientes. Ele substitui a antiga estrutura estática por um sistema de componentes modular, interativo e com excelente performance.

### Principais Características
* **Estética Premium:** Paleta com Ink Black, Warm Ivory, detalhes em Burgundy (pinceladas expressivas) e Aged Gold (1-3% de detalhes metálicos).
* **Ritmo Editorial:** Alternância intencional entre fundos escuros dramáticos e áreas claras com tipografia sofisticada.
* **Componentes React:** Interface modular e de fácil manutenção dividida em seções.
* **Responsividade Art-Directed:** Layout que se adapta de forma fluida a dispositivos móveis sem perder o rigor da tipografia.

---

## ⚙️ Estrutura do Projeto

O workspace está organizado de forma profissional na raiz do repositório:
* **`/src`:** Código-fonte da aplicação React (componentes, estilos e assets otimizados).
* **`/public`:** Arquivos estáticos servidos diretamente (ícones e favicon).
* **`/docs`:** Documentações de arquitetura, briefing e design system editorial.
* **`/dist`:** Pasta autogerada pelo build contendo os arquivos otimizados para produção.
* **`index.html`:** Ponto de entrada da aplicação.
* **`package.json` & `vite.config.js`:** Configurações do npm e Vite.

---

## 🚀 Instalação e Desenvolvimento

Para rodar o projeto localmente:

### Pré-requisitos
* Node.js (versão 18 ou superior)
* npm (gerenciador de pacotes padrão)

### Configuração do Ambiente

1. Instale as dependências na raiz do repositório:
   ```bash
   npm install
   ```

2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
   *O projeto estará disponível em http://localhost:5173.*

---

## 🛠️ Compilação e Build (Deploy Profissional)

Quando estiver pronto para fazer o deploy em produção (ex: Vercel, Netlify ou GitHub Pages):

1. Execute o comando de compilação:
   ```bash
   npm run build
   ```

2. Isso criará uma pasta chamada `/dist` na raiz, contendo todo o site otimizado para produção.

### Instruções de Deploy automático:
* **Vercel / Netlify:** Basta conectar o seu repositório no GitHub. A plataforma detectará automaticamente que é um projeto Vite. Use as configurações padrões:
  * **Build Command:** `npm run build`
  * **Output Directory:** `dist`
* **GitHub Pages:** Você pode publicar apontando o deploy para a pasta `/dist` ou usando uma GitHub Action de deploy para Vite.

---

## 📝 Guia de Contribuição

Para modificar o conteúdo do portfólio (como adicionar novos projetos, cursos ou alterar textos):
1. Edite os dados nos respectivos componentes:
   * **Projetos:** Edite a lista em `src/components/Projects.jsx`.
   * **Formação e Idiomas:** Edite a lista em `src/components/Education.jsx`.
   * **Habilidades:** Edite a lista em `src/components/Skills.jsx`.
2. Salve os arquivos e execute `npm run build` para atualizar a pasta `/dist`.

---

## ⚖️ Licença

Este projeto está sob a licença [MIT](https://choosealicense.com/licenses/mit/). Sinta-se livre para usar, estudar e modificar o código.
