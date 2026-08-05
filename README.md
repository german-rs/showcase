# Showcase

Plantillas de portafolio web para fotógrafos de bodas, construidas en **React + Vite** y desplegadas automáticamente en **GitHub Pages**. Sirven como demo para ofrecer sitios personalizados a distintos clientes del rubro.

[![React 18](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white&style=flat-square)](https://react.dev/)
[![Vite 5](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white&style=flat-square)](https://vitejs.dev/)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Deployed-222222?logo=github&logoColor=white&style=flat-square)](https://pages.github.com/)
[![License MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)](./LICENSE)

---

## Ver en vivo

| Plantilla | Estado | Demo |
|---|---|---|
| **Sitio 01** | En desarrollo | [german-rs.github.io/showcase/site-01](https://german-rs.github.io/showcase/site-01/) |
| **Sitio 02** | Pendiente | [german-rs.github.io/showcase/site-02](https://german-rs.github.io/showcase/site-02/) |
| **Sitio 03** | Pendiente | [german-rs.github.io/showcase/site-03](https://german-rs.github.io/showcase/site-03/) |

Los enlaces se activan una vez configurado GitHub Pages en el repositorio (ver [Despliegue](#despliegue)).

---

## Por qué esta arquitectura

Cada sitio es una app React independiente pensada para convertirse en el sitio real de un cliente, no solo en una demo:

- **Rutas limpias**: `BrowserRouter` con el truco de redirección [spa-github-pages](https://github.com/rafgraph/spa-github-pages) en vez de `HashRouter`. Las URLs quedan como `/site-01/gallery` en lugar de `/site-01/#/gallery`, y las rutas internas no se rompen al recargar o compartir un link directo.
- **SEO por página**: `react-helmet-async` permite título y meta description propios en cada vista.
- **Build aislado**: cada sitio tiene su propio `vite.config.js`, `package.json` y `base path`, así que se pueden construir y desplegar por separado.

---

## Arquitectura

```
showcase/
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD: build + deploy automático
│
├── sites/
│   ├── site-01/
│   │   ├── public/
│   │   │   └── 404.html        # Redirección SPA para GitHub Pages
│   │   ├── src/
│   │   │   ├── pages/          # Home, Gallery, About, Contact
│   │   │   ├── components/     # Navbar, Footer
│   │   │   └── assets/
│   │   ├── index.html
│   │   ├── vite.config.js      # base: '/showcase/site-01/'
│   │   └── package.json
│   │
│   ├── site-02/                # Plantilla 2 (en construcción)
│   └── site-03/                # Plantilla 3 (en construcción)
│
├── .gitignore
├── package.json                # Scripts globales del monorepo
└── README.md
```

---

## Requisitos

- [Node.js](https://nodejs.org/) 18+
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)

---

## Instalación rápida

```bash
git clone https://github.com/german-rs/showcase.git
cd showcase
npm run install:all   # instala raíz + los 3 sitios
```

## Desarrollo

Cada sitio corre de forma independiente:

```bash
npm run dev:site-01
npm run dev:site-02
npm run dev:site-03
```

## Build y preview local

```bash
npm run build:site-01     # o build:all para los 3
npm run preview:site-01   # sirve el build localmente para probarlo
```

---

## Despliegue

El workflow `.github/workflows/deploy.yml` construye los 3 sitios y los publica en GitHub Pages en cada push a `main`. Requiere que **GitHub Pages** esté activado en *Settings → Pages* con la fuente **GitHub Actions**.

---

## Roadmap

- [ ] Terminar contenido y diseño del Sitio 01
- [ ] Sitio 02
- [ ] Sitio 03

---

## Licencia

MIT