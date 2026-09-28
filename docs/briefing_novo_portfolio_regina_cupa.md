# Briefing --- Novo Portfólio / CV Digital \| Regina Cupa

## 1. Objetivo

Redesenhar o portfólio pessoal de Regina Cupa como um **CV digital
contemporâneo**, com identidade própria e apresentação profissional
suficiente para ser usado como case dentro do portfólio da
**SignatuRe**.

O projeto atual foi a primeira aplicação em HTML e CSS criada para
portfólio. A nova versão não deve simplesmente apagar essa origem: deve
representar a evolução de design, front-end e posicionamento
profissional.

> Importante: este projeto é da Regina Cupa. Não deve parecer uma
> extensão visual da SignatuRe. A SignatuRe poderá apresentá-lo
> posteriormente como projeto/case.

------------------------------------------------------------------------

## 2. Problema da versão atual

A versão atual mistura funções diferentes:

-   portfólio profissional;
-   currículo;
-   apresentação pessoal;
-   oferta de serviços para pequenas e médias empresas;
-   divulgação de Google Meu Negócio, Google Maps e WhatsApp;
-   formação acadêmica;
-   projetos de estudo.

Isso enfraquece a hierarquia e deixa pouco claro, nos primeiros
segundos, quem é Regina, o que ela faz e quais competências seus
projetos demonstram.

A nova versão deve ter uma narrativa única:

**Regina Cupa → perfil profissional → competências → projetos → formação
→ contato.**

------------------------------------------------------------------------

## 3. Posicionamento do novo site

### Papel do site

Portfólio pessoal + CV digital.

### Objetivo principal

Apresentar Regina como profissional que atua na interseção entre
**design de interfaces e desenvolvimento front-end**, mostrando
raciocínio, evolução e capacidade de transformar uma ideia em
experiência digital.

### Evitar

-   aparência de template de currículo;
-   barras percentuais de skills;
-   listas enormes de tecnologias sem contexto;
-   excesso de texto autobiográfico;
-   repetição de serviços;
-   linguagem genérica como "sou apaixonada por tecnologia";
-   copiar a identidade visual da SignatuRe;
-   transformar o site em uma landing page comercial da SignatuRe.

------------------------------------------------------------------------

## 4. Direção para o Design System

O Antigravity deverá propor um **Design System próprio para o portfólio
Regina Cupa**.

A direção desejada é:

-   contemporânea;
-   autoral;
-   sofisticada sem ser excessivamente corporativa;
-   tecnológica sem estética clichê de "site de dev";
-   editorial;
-   limpa;
-   com personalidade;
-   responsiva;
-   forte uso de tipografia e composição;
-   movimento com propósito.

### O sistema deve definir

-   paleta principal e neutros;
-   cores de destaque;
-   tipografia display;
-   tipografia de leitura/UI;
-   escala tipográfica;
-   grid;
-   spacing system;
-   border radius;
-   botões;
-   links;
-   cards;
-   tags de tecnologia;
-   estados hover/focus/active;
-   componentes de projeto;
-   navegação;
-   comportamento mobile;
-   motion principles;
-   acessibilidade e contraste;
-   tokens reutilizáveis.

### Motion

Usar movimento para criar hierarquia e revelar conteúdo, não apenas
decoração.

Possibilidades: - entrada progressiva de títulos; - transições sutis
entre seções; - microinterações em projetos; - hover que revele
contexto; - mudanças de escala/posição durante scroll; - transições de
imagens/mockups.

Evitar animações gratuitas ou que prejudiquem leitura.

------------------------------------------------------------------------

# 5. Arquitetura de conteúdo

## 5.1 Hero

O primeiro viewport deve responder rapidamente:

**Quem é Regina?\
O que ela faz?\
O que posso ver aqui?**

### Conteúdo sugerido

**Regina Cupa**

**Front-end Developer & UI Designer**

Design e código trabalhando juntos para transformar ideias em
experiências digitais claras, funcionais e bem construídas.

CTAs:

-   **Ver projetos**
-   **Sobre mim**

Links secundários: - GitHub - LinkedIn - contato

> O Design System pode explorar uma apresentação mais autoral dessa
> mensagem, sem depender do layout tradicional "foto à esquerda + texto
> à direita".

------------------------------------------------------------------------

## 5.2 Sobre

### Título sugerido

**Entre o design e o código.**

### Conteúdo-base

Minha trajetória reúne design de interfaces, desenvolvimento front-end e
uma curiosidade constante sobre como produtos digitais são construídos.

Mais do que separar design e desenvolvimento em etapas isoladas, gosto
de entender a experiência como um todo: estrutura, hierarquia,
interação, interface e implementação.

Este portfólio reúne projetos que fazem parte dessa evolução --- do
primeiro HTML e CSS a experiências desenvolvidas com JavaScript, React,
APIs e ferramentas de design.

### Complemento

Criar uma pequena área visual com:

**Design** - UI Design - UX fundamentals - Figma - prototipação -
sistemas visuais

**Development** - HTML - CSS - JavaScript - React - integração com
APIs - Git/GitHub

**Back-end / conhecimento complementar** - Python - Flask - REST APIs -
SQL/MySQL - Docker

Não apresentar domínio técnico por porcentagem.

------------------------------------------------------------------------

# 6. Projetos em destaque

A antiga seção "Experiência" deve ser substituída por **Projetos**.

Cada projeto deve funcionar como um pequeno case e não apenas como uma
imagem acompanhada de tecnologias.

Estrutura padrão de cada case:

1.  Nome
2.  Categoria
3.  Contexto
4.  Desafio
5.  Solução
6.  Minha participação
7.  Tecnologias
8.  Aprendizado / evolução
9.  Links disponíveis (GitHub / demo / Figma)

------------------------------------------------------------------------

## 6.1 Orquidário Lilás

### Categoria

UI / Front-end

### Contexto

Projeto desenvolvido durante a evolução dos estudos em interfaces e
desenvolvimento web.

### O que apresentar

Explicar o objetivo original do projeto, decisões de interface,
estrutura das páginas e tecnologias utilizadas.

### Destaque

Mostrar principalmente: - composição visual; - organização de
conteúdo; - responsividade; - evolução em HTML/CSS; - decisões de UI.

------------------------------------------------------------------------

## 6.2 Tim-Tim

### Categoria

Front-end / API

### Contexto

Projeto relacionado ao universo de vinhos, utilizado para aprofundar
conhecimentos de desenvolvimento de aplicações e integração entre
interface e dados.

### O que apresentar

-   problema proposto;
-   estrutura da aplicação;
-   consumo ou construção de API;
-   componentes;
-   navegação;
-   documentação quando aplicável.

### Tecnologias a revisar no projeto original

React, JavaScript, Flask/OpenAPI e demais tecnologias efetivamente
utilizadas.

> Corrigir referências antigas como "JavaScrip" e "documenetação
> Swegger".

------------------------------------------------------------------------

## 6.3 BuyWine

### Categoria

React / Full-stack learning project

### Contexto

Aplicação de e-commerce desenvolvida como exercício de integração entre
front-end e back-end.

### Aspectos relevantes

-   catálogo de produtos;
-   consumo de API;
-   carrinho;
-   gerenciamento de quantidade;
-   rotas;
-   integração React + Flask;
-   CORS;
-   banco de dados/API, caso permaneçam na versão apresentada.

### Narrativa

O case deve mostrar o que Regina aprendeu resolvendo os problemas do
projeto, não fingir que foi um produto comercial real.

------------------------------------------------------------------------

# 7. Evolução

Criar uma seção curta que transforme a origem do portfólio em narrativa.

### Título sugerido

**O código também conta uma história.**

### Conteúdo

Este site começou como minha primeira aplicação em HTML e CSS.

Em vez de apagar essa versão, decidi reconstruí-la.

O novo portfólio representa não apenas novos projetos, mas uma mudança
na forma como penso interfaces, estrutura, código e experiência.

### Possibilidade visual

Criar um comparativo discreto:

**2023 → 2026**

Primeira versão → Nova versão

O objetivo não é ridicularizar o projeto antigo, e sim tornar visível a
evolução.

------------------------------------------------------------------------

# 8. Competências

Evitar uma "nuvem de logos".

Organizar por capacidade:

### Interface

Figma · UI Design · prototipação · responsividade · design systems

### Front-end

HTML · CSS · JavaScript · React

### Integração

REST APIs · fetch · ViaCEP · consumo de dados

### Back-end / ferramentas

Python · Flask · SQL/MySQL · Git/GitHub · Docker

> Só incluir tecnologias que Regina efetivamente utilizou.

------------------------------------------------------------------------

# 9. Formação

Separar formação acadêmica de cursos complementares.

## Formação acadêmica

Revisar e confirmar antes da publicação: - instituição; - nome exato do
curso; - período; - status.

## Cursos e especializações

Revisar os cursos existentes no site antigo, incluindo Origamid e demais
formações relevantes.

Não é necessário exibir todo curso realizado. Priorizar o que reforça o
posicionamento atual.

## Idiomas

Manter somente se fizer sentido para oportunidades profissionais e com
nível descrito de maneira objetiva.

------------------------------------------------------------------------

# 10. Contato

Substituir o rodapé atual, que repete a oferta de serviços, por um
encerramento simples.

### Título sugerido

**Vamos conversar?**

### Texto-base

Estou aberta a projetos, colaborações e oportunidades em que design e
desenvolvimento possam trabalhar juntos.

### Links

-   LinkedIn
-   GitHub
-   e-mail

Opcional: - download do CV em PDF.

------------------------------------------------------------------------

# 11. Navegação sugerida

Desktop:

**Regina Cupa**\
Sobre · Projetos · Skills · Formação · Contato

Mobile: menu compacto e acessível.

A navegação deve permitir chegar rapidamente aos projetos.

------------------------------------------------------------------------

# 12. Correções obrigatórias do conteúdo atual

Antes de reutilizar qualquer texto da versão antiga:

-   `JavaScrip` → `JavaScript`;
-   `documenetação Swegger` → `documentação Swagger`;
-   remover duplicação em `40 horas horas`;
-   revisar `Anhaguera` e usar o nome oficial da instituição;
-   corrigir inconsistências como `UI/ UX`;
-   revisar `Joinville -SC`;
-   corrigir nomes de classes/estrutura como `falculdade-curso`;
-   revisar ortografia, acentuação e pontuação de todo o conteúdo;
-   validar datas e nomes de cursos;
-   validar links externos;
-   validar tecnologias atribuídas a cada projeto.

------------------------------------------------------------------------

# 13. Requisitos técnicos

A nova implementação deve priorizar:

-   HTML semântico;
-   acessibilidade;
-   responsividade real;
-   performance;
-   SEO básico;
-   Open Graph;
-   navegação por teclado;
-   foco visível;
-   contraste WCAG;
-   imagens otimizadas;
-   lazy loading quando adequado;
-   `alt` descritivo;
-   estrutura de headings correta;
-   reduced motion;
-   componentes reutilizáveis;
-   código organizado.

Se React não trouxer benefício real para o portfólio, não utilizá-lo
apenas para demonstrar tecnologia. A escolha da stack deve servir ao
projeto.

------------------------------------------------------------------------

# 14. Metadados / SEO

Preparar:

### Title

**Regina Cupa --- Front-end Developer & UI Designer**

### Description

Portfólio de Regina Cupa: projetos de UI Design e desenvolvimento
front-end, interfaces digitais, React, JavaScript e experiências para
web.

Revisar essa descrição após a definição final do posicionamento.

------------------------------------------------------------------------

# 15. Como este projeto entra na SignatuRe

Este ponto é importante.

O portfólio da Regina **não deve ser inserido na SignatuRe como se fosse
um trabalho comercial feito para um cliente externo**.

Ele pode entrar como:

### Projeto autoral / projeto interno

**Regina Cupa --- Portfolio Redesign**

Tipo: Portfolio / Personal Brand / UI Design / Front-end

Papel da SignatuRe: Direção visual, UX/UI e desenvolvimento.

Contexto: Redesign completo de um portfólio pessoal originalmente
desenvolvido como primeiro projeto em HTML e CSS.

Isso permite demonstrar processo, evolução, design system,
responsividade e implementação sem criar um case fictício.

------------------------------------------------------------------------

# 16. Material que o Antigravity deve entregar

Criar:

1.  conceito visual do novo portfólio;
2.  Design System;
3.  tokens;
4.  tipografia;
5.  paleta;
6.  grid;
7.  componentes;
8.  estados de interação;
9.  desktop;
10. tablet;
11. mobile;
12. motion direction;
13. Hero;
14. Sobre;
15. Projetos;
16. template de case;
17. Evolução;
18. Competências;
19. Formação;
20. Contato;
21. footer;
22. tratamento visual para screenshots/mockups;
23. orientação para implementação front-end.

------------------------------------------------------------------------

# 17. Critério final

O resultado não deve comunicar apenas:

> "Regina sabe HTML, CSS, JavaScript e React."

Deve comunicar:

> **Regina sabe pensar uma experiência digital e consegue levá-la do
> conceito à interface e da interface ao código.**

O novo portfólio precisa demonstrar isso visualmente antes mesmo de o
visitante terminar de ler os textos.
