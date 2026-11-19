# ⚡ Pokédex React

Aplicación web hecha con **React** que consume la [PokéAPI](https://pokeapi.co/) para listar Pokémon y mostrar el detalle de cada uno.

## ✨ Funcionalidades

- Página de inicio y listado de Pokémon obtenido desde la PokéAPI
- Vista de detalle de cada Pokémon (imagen, altura, peso, habilidades, estadísticas y tipos)
- Navegación entre páginas con **React Router** y página de error 404
- Carga diferida de páginas (lazy loading) y diseño con **React Bootstrap**

## 🛠️ Tecnologías

- React 18 (Create React App)
- React Router 6
- React Bootstrap / Bootstrap 5
- Fetch API contra `https://pokeapi.co/api/v2/`

## 📁 Estructura

```
src/
├── pages/            Inicio, Home (listado) y Error 404
├── components/       Detalle del Pokémon
├── layouts/          Layout principal, encabezado y carga diferida
└── routes/Router.js  Definición de rutas
```

## 🚀 Cómo ejecutarlo

```bash
git clone https://github.com/idkferr/API-POKEM-N.git
cd API-POKEM-N
npm install
npm start
```

La app queda disponible en `http://localhost:3000`.
