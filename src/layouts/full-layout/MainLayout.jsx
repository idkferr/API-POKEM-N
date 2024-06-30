import React, { useEffect, useState } from "react"; // Importa React y sus hooks useEffect y useState
import { Outlet } from "react-router-dom";// Importa Outlet de react-router-dom para renderizar rutas anidadas
import Header from "./Header";// Importa el componente Header

function MainLayout() {
  const [loading, setLoading] = useState(true);// Estado para controlar el estado de carga inicial

  useEffect(() => {
    // Simula carga de datos o espera a la carga real desde una API
    setTimeout(() => {
      setLoading(false); // Marca la carga como completa después de 2 segundos
    }, 2000);// Simula una carga de 2 segundos
  }, []);// El efecto se ejecuta solo una vez al montar el componente

  return (
    <>
      {!loading ? (
        <>
          <Header />
          <Outlet />
        </>
      ) : (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
    </>
  );
}

export default MainLayout;// Exporta el componente MainLayout
