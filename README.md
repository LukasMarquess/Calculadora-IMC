# Calculadora de IMC

**Descrição**

Este projeto é uma aplicação web simples construída com React e Vite que calcula o Índice de Massa Corporal (IMC). É um exemplo prático com componentes organizados em `src/componentes`, uso de Bootstrap para estilos e scripts de desenvolvimento configurados no `package.json`.

**Características**
- **Cálculo do IMC**: recebe peso (kg) e altura (m) e exibe o valor do IMC e a classificação.
- **Componentização**: componentes para cabeçalho e formulário localizados em `src/componentes`.
- **Configuração pronta**: scripts para desenvolvimento, build e preview via Vite.

**Pré-requisitos**
- Node.js 16+ e npm (ou outro gerenciador de pacotes compatível).

**Instalação e execução**

Instale dependências:

```
npm install
```

Execute em modo desenvolvimento:

```
npm run dev
```

Gerar build de produção e visualizar:

```
npm run build
npm run preview
```

**Scripts importantes**
- `dev`: inicia o servidor de desenvolvimento (Vite).
- `build`: cria a versão otimizada para produção.
- `preview`: pré-visualiza o build localmente.
- `lint`: executa o `oxlint` configurado.

**Estrutura do projeto**
- [index.html](index.html)
- [vite.config.js](vite.config.js)
- [src/main.jsx](src/main.jsx)
- [src/componentes/cabeçario/main.jsx](src/componentes/cabeçario/main.jsx)
- [src/componentes/cabeçario/main.css](src/componentes/cabeçario/main.css)
- [src/componentes/formulario/main.jsx](src/componentes/formulario/main.jsx)
- [src/componentes/formulario/main.css](src/componentes/formulario/main.css)
- [public/](public/)

**Como usar**

- Abra a aplicação no navegador no endereço informado pelo `npm run dev` (por padrão `http://localhost:5173`).
- Preencha os campos de peso (kg) e altura (m) no formulário e clique em calcular.
- O resultado apresenta o valor do IMC e a faixa classificatória.