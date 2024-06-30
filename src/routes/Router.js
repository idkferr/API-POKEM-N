import React, { lazy } from "react"; // Importa React y lazy para carga perezosa de componentes
import { Navigate } from "react-router-dom"; // Importa Navigate de React Router para la navegación
import Loadable from "../layouts/Loadable"; // Importa la función Loadable para carga perezosa de layouts

// Layout principal que puede incluir NavBars, SideBars, etc., específicos de Pokémon
const FullLayout = Loadable(
  lazy(() => import("../layouts/full-layout/MainLayout")) // Carga perezosa del layout principal
);

// Página personalizada de error, posiblemente con algunos gráficos de Pokémon y enlaces útiles
const Error = Loadable(
  lazy(() => import("../pages/Error/404")) // Carga perezosa de la página de error personalizada
);

// Página de inicio centrada en Pokémon
const HomePage = Loadable(
  lazy(() => import("../pages/Home/Home")) // Carga perezosa de la página de inicio centrada en Pokémon
);

// Página de inicio
const StartPage = Loadable(
  lazy(() => import("../pages/StartPage")) // Carga perezosa de la página de inicio
);

// Configuración de rutas
const Router = [
  {
    path: "/", // Ruta raíz
    element: <FullLayout />, // Componente de layout principal para la ruta raíz
    children: [
      { path: "", exact: true, element: <StartPage /> }, // Ruta exacta para la página de inicio
      { path: "home", element: <HomePage /> }, // Ruta para la página de inicio
      { path: "*", element: <Navigate to="/404" /> }, // Ruta de comodín para manejar rutas no encontradas
      { path: "404", element: <Error /> }, // Ruta para la página de error personalizada
    ],
  },
];

export default Router; // Exporta la configuración de rutas