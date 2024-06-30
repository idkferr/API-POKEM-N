import React from "react"; // Importa React
import { Container, Row, Col, Button } from "react-bootstrap"; // Importa componentes de React Bootstrap
import { useNavigate } from "react-router-dom"; // Importa useNavigate de React Router
import "./StartPage.css"; // Importa el archivo CSS para estilos específicos

const StartPage = () => {
  const navigate = useNavigate(); // Hook de React Router para la navegación

  // Función para manejar el click en el botón de inicio
  const handleStartClick = () => {
    navigate("/home"); // Navega hacia la ruta "/home" al hacer click en el botón
  };

  return (
    <Container fluid className="start-page"> {/* Contenedor fluido con clase "start-page" para la página de inicio */}
      <Row> {/* Fila para organizar contenido */}
        <Col className="text-center"> {/* Columna centrada */}
          <Button variant="primary" size="lg" onClick={handleStartClick}> {/* Botón con variant "primary" y tamaño grande */}
            Conoce a los Pokémons {/* Texto del botón */}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default StartPage; // Exporta el componente StartPage
