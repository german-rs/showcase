# Showcase

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white&style=flat-square" alt="React 18">
  <img src="https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white&style=flat-square" alt="Vite 5">
  <img src="https://img.shields.io/badge/GitHub%20Pages-Deployed-222222?logo=github&logoColor=white&style=flat-square" alt="GitHub Pages">
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="License MIT">
</p>

<p align="center">
  Monorepo con 3 portafolios fotograficos construidos con <strong>React + Vite</strong> y desplegados automaticamente en <strong>GitHub Pages</strong>.
</p>

---

## Ver en vivo

| Portafolio | Vista previa | Estado |
|------------|--------------|--------|
| **Sitio 01** &mdash; Lens | [german-rs.github.io/showcase/site-01](https://german-rs.github.io/showcase/site-01/) | En desarrollo |
| **Sitio 02** &mdash; Pronto | [german-rs.github.io/showcase/site-02](https://german-rs.github.io/showcase/site-02/) | En construccion |
| **Sitio 03** &mdash; Pronto | [german-rs.github.io/showcase/site-03](https://german-rs.github.io/showcase/site-03/) | En construccion |

> Los enlaces se activan una vez configurado GitHub Pages. Sigue los pasos de la seccion [Activar GitHub Pages](#activar-github-pages).

---

## Arquitectura

```text
showcase/
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD: build + deploy automático
│
├── sites/
│   ├── site-01/                # Portafolio 1: React + Vite
│   │   ├── src/
│   │   │   ├── pages/          # Home, Gallery, About, Contact
│   │   │   ├── components/     # Navbar, Footer
│   │   │   ├── hooks/          # Custom hooks
│   │   │   └── assets/         # Imágenes y fuentes
│   │   ├── index.html
│   │   ├── vite.config.js      # base: '/showcase/site-01/'
│   │   └── package.json
│   │
│   ├── site-02/                # Portafolio 2 (plantilla)
│   └── site-03/                # Portafolio 3 (plantilla)
│
├── .gitignore
├── package.json                # Scripts globales del monorepo
└── README.md
```



Cada sitio es una aplicacion **Vite + React** totalmente independiente con:

- Router propio (`HashRouter` para compatibilidad con GitHub Pages)
- SEO por pagina (`react-helmet-async`)
- Estilos modulares (CSS puro)
- Build aislado

---

## Requisitos

- [Node.js](https://nodejs.org/) 18+
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)

---

## Instalacion rapida

```bash
# Clonar
git clone https://github.com/german-rs/showcase.git
cd showcase

# Instalar todo: raiz + 3 sitios
npm run install:all

## Desarrollo
Levanta cualquier sitio de forma independiente:

# Sitio 01
npm run dev:site-01

# Sitio 02
npm run dev:site-02

# Sitio 03
npm run dev:site-03


## Build

# Construir los 3 sitios
npm run build:all

# Construir uno especifico
npm run build:site-01