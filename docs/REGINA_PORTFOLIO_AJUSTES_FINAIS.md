# Portfólio Regina Cupa — Complemento de ajustes finais

> **Natureza deste documento:** complemento ao projeto e ao design system existentes. Implementar somente os ajustes descritos aqui. Não reconstruir a página, não substituir a identidade editorial aprovada e não alterar as demais seções sem necessidade técnica. Preservar responsividade, acessibilidade e comportamento já funcional.

## 1. Hero — mais respiro, mesma identidade

**Objetivo:** reduzir a disputa visual entre título, retrato, pincelada e elementos geométricos, mantendo a direção editorial/Vogue existente.

- Manter a marca discreta `Regina Cupa.` no cabeçalho, o fundo escuro e o retrato em preto e branco já utilizado.
- Substituir o título profissional atual por:

  **Front-end Developer**  
  *& UI Designer*

- Texto de apoio: **“Do conceito à interface, transformo ideias em experiências digitais.”**
- CTA principal: **VER PROJETOS**, apontando para a seção de projetos. O link “SOBRE MIM”, caso mantido, deve ser secundário e discreto.
- Retirar a linha comercial **“SITES, GOOGLE & WHATSAPP · JOINVILLE - SC”** da Hero; ela pertence à comunicação comercial da SignatuRe, não ao portfólio pessoal.
- Dar mais espaço negativo ao texto e à fotografia; organizar a composição em áreas visuais flexíveis (texto à esquerda, retrato em destaque, pincelada vinho como apoio artístico), sem impor três colunas rígidas de mesma largura.
- Preservar a pincelada vinho, posicionada **atrás** do retrato e sem cobrir rosto ou texto. Remover/reduzir o retângulo preto inclinado e a pincelada dourada concorrente, se presentes na Hero atual.
- Não cortar rosto, CTA ou título em telas menores. No mobile, reorganizar elementos sem sobreposição prejudicial.

## 2. Projetos — substituir/atualizar a vitrine para os quatro projetos aprovados

**Ordem obrigatória:** 01 Orquidário Lilás 2.0; 02 Bikcraft; 03 Cãotinho Feliz; 04 RodoSOS.

**Formato dos quatro cards:** título, descrição breve, tecnologias, imagem de destaque aprovada e link para a versão publicada. A **imagem inteira deve ser clicável**, com indicação visível “VISITAR PROJETO ↗”; abrir em nova aba (`target="_blank"` e `rel="noopener noreferrer"`). Manter o tratamento visual consistente entre os cards e respeitar a identidade cromática de cada projeto. As imagens produzidas para os cards são **composições editoriais/promocionais**, não screenshots literais: não apresentá-las como captura fiel do produto. Não trocar as imagens aprovadas por fotos genéricas.

**Arquivos de imagem — nomes confirmados pela Regina no explorador do VS Code:** as quatro capas aprovadas estão em `src/assets/`. Usar os nomes abaixo **exatamente como escritos**, respeitando maiúsculas, minúsculas e extensão (importante no deploy). Se os cards estiverem em componentes dentro de `src/`, importar as imagens pelo caminho relativo correto; não usar caminhos absolutos `/src/assets/...` no HTML publicado e não duplicar arquivos. Preservar enquadramento e textos internos das artes: evitar `object-fit: cover` agressivo que corte a composição; preferir uma proporção comum com enquadramento integral e responsivo.

### 01 — Orquidário Lilás 2.0

**Descrição:** Uma boutique digital de orquídeas que une atmosfera botânica e experiência de compra. Modernizei a interface, criei uma jornada visual com transições de cor e integrei a vitrine e o carrinho a uma API desenvolvida em Python.

**Tecnologias:** HTML, CSS, JavaScript, Python, Flask, SQLite.

**Imagem:** `src/assets/orquidarioLilas.png` — capa aprovada com fundo chocolate, orquídea lilás e composição editorial da boutique.

**Link publicado:** https://reginacupa.github.io/OrquidarioLilas_2.0/

### 02 — Bikcraft

**Descrição:** Projeto de estudo que percorre o caminho do design à implementação. Da prototipagem no Figma ao desenvolvimento com HTML e CSS, trabalhei composição visual, hierarquia de informações e adaptação da interface a diferentes telas.

**Tecnologias:** Figma, HTML, CSS, JavaScript (somente se confirmado no código em uso).

**Imagem:** `src/assets/bikcraft.png` — capa aprovada preta e amarela, com bicicleta preta e título “Bicicletas feitas sob medida.”

**Link publicado:** https://reginacupa.github.io/bikcraft/

### 03 — Cãotinho Feliz

**Descrição:** Site de apresentação para um pet shop fictício, com identidade visual acolhedora e bem-humorada. Organizei serviços, equipe e contato em uma navegação simples, pensada para aproximar a marca de quem ama seus pets.

**Tecnologias:** HTML, CSS, JavaScript (somente se confirmado no código em uso).

**Imagem:** `src/assets/caotinhoFeliz.png` — capa aprovada em creme e laranja, com os três cachorrinhos de óculos.

**Link publicado:** https://reginacupa.github.io/Caotinho_Feliz/

### 04 — RodoSOS

**Descrição:** Aplicação web voltada a situações de emergência rodoviária. Desenvolvida com React e TypeScript, reúne abertura de chamados, captura de localização por GPS e recursos de comunicação em uma interface pensada para facilitar o pedido de ajuda.

**Tecnologias:** React, TypeScript, Vite, Tailwind CSS, Web APIs.

**Imagem:** `src/assets/rodoSOS.png` — capa aprovada escura e cinematográfica, com botão SOS em destaque, mockup de celular e sinalização rodoviária.

**Link publicado:** https://reginacupa.github.io/RodoSOS/

**Cuidado com a comunicação do RodoSOS:** apresentar como projeto de aplicação/demonstração; não afirmar que existe central humana de emergência operacional, atendimento real 24h ou serviço de socorro efetivamente prestado. Não confundir a imagem conceitual com funcionalidades implementadas.

## 3. Footer — preservar o layout, alterar a mensagem e a camada da pincelada

Manter a composição visual aprovada: fundo escuro, título **“Vamos *conversar?*”**, contatos, cartões e pincelada vinho.

**Substituir somente o parágrafo comercial** sobre sites, Google Meu Negócio e automação de WhatsApp por:

> Tem uma ideia, um projeto ou uma oportunidade em mente? Vamos conversar sobre como posso contribuir com design e desenvolvimento para transformá-la em realidade.

**Pincelada vinho:** deve ficar **atrás dos elementos do footer** — atrás do texto, dos cartões de contato e dos links — como textura/apoio visual, jamais por cima deles. Implementar camadas de forma explícita (por exemplo, contêiner `position: relative`, pincelada decorativa `position: absolute; z-index: 0; pointer-events: none;` e conteúdo `position: relative; z-index: 1;`). Evitar criar stacking contexts que anulem a ordem; preservar legibilidade e cliques, inclusive no mobile. Se a pincelada for puramente decorativa, usar `alt=""` e/ou `aria-hidden="true"` conforme o elemento.

## 4. Tipografia — preservar a lógica editorial, sem proliferar famílias

Não eliminar a alternância intencional de títulos editoriais como “Formação & *Estudo*” e “Vamos *conversar?*”. Ela é parte da identidade aprovada. Limitar o projeto a **no máximo três famílias tipográficas**: uma serifada editorial, uma sans-serif funcional e, somente se já necessária, uma expressiva de uso pontual. Itálicos, tamanhos e pesos dentro de uma mesma família não contam como famílias adicionais. Preferir reutilizar as fontes já presentes e coerentes com o design system, em vez de substituí-las indiscriminadamente.

## 5. Critérios de conclusão

- Hero mais leve, com profissão aprovada e CTA funcionando.
- Exatamente quatro projetos na ordem indicada, com **as quatro imagens corretas de `assets`**, textos, tecnologias verificadas e links publicados clicáveis.
- Footer com novo texto pessoal e pincelada **atrás** de todo conteúdo interativo e textual.
- Sem mudanças desnecessárias nas seções Sobre, Skills e Formação.
- Conferir visualmente desktop e mobile; não deixar imagens, textos ou botões cortados.
