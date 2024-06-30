import React from "react"; // Importa React
import ReactDOM from "react-dom/client"; // Importa ReactDOM (sólo el cliente)
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos CSS de Bootstrap
import App from "./App"; // Importa el componente principal de la aplicación
import reportWebVitals from "./reportWebVitals"; // Importa la función reportWebVitals
import { BrowserRouter } from "react-router-dom"; // Importa BrowserRouter para manejar rutas
import "./index.css"; // Importa estilos CSS específicos para el índice

const root = ReactDOM.createRoot(document.getElementById("root")); // Crea un root de ReactDOM en el elemento con id "root"
root.render( // Renderiza el componente principal de la aplicación dentro del root
  <React.StrictMode> {/* Modo estricto de React para identificar problemas potenciales en la aplicación */}
    <BrowserRouter> {/* Proveedor de contexto para manejar las rutas del navegador */}
      <App /> {/* Componente principal de la aplicación */}
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals(); // Llama a la función reportWebVitals para medir y reportar el rendimiento web
