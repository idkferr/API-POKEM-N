import React, { Suspense } from 'react'; // Importa React y Suspense
import { Spinner } from 'react-bootstrap'; // Importa Spinner de react-bootstrap

// Función Loadable que devuelve un componente de carga dinámica
const Loadable = (Component, FallbackComponent) => (props) => {
  // Componente de respaldo por defecto mientras se carga el componente principal
  const Fallback = FallbackComponent || (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );

  // Renderiza el componente principal dentro de un Suspense con el componente de respaldo
  return (
    <Suspense fallback={Fallback}>
      <Component {...props} /> {/* Renderiza el componente principal con sus props */}
    </Suspense>
  );
};

export default Loadable; // Exporta la función Loadable como componente dinámico
