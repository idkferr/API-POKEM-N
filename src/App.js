import React from 'react'; // Importa React
import { useRoutes } from 'react-router-dom'; // Importa useRoutes de React Router para la gestión de rutas
import Router from './routes/Router'; // Importa la configuración de rutas desde el archivo Router

function App() {
  const routing = useRoutes(Router); // Utiliza useRoutes para configurar las rutas con la configuración de Router

  return (
    <React.Fragment> {/* Fragmento de React para envolver el contenido */}
      {routing} {/* Renderiza las rutas definidas en el archivo Router */}
    </React.Fragment>
  );
}

export default App; // Exporta el componente principal App
