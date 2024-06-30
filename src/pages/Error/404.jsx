import React from "react"; // Importa React
import { Button, Col, Container, Row } from "react-bootstrap"; // Importa componentes de react-bootstrap
import { Link } from "react-router-dom"; // Importa Link de react-router-dom para enlaces internos

const Error = () => (
  <Container
    fluid
    className="vh-100 d-flex justify-content-center align-items-center bg-light" // Contenedor que ocupa toda la altura de la pantalla y está centrado verticalmente
  >
    <Row className="text-center"> {/* Fila centrada en el contenido */}
      <Col> {/* Columna para el contenido */}
        <h1 className="display-1">404</h1> {/* Título grande 404 */}
        <h4 className="mb-4">This page could not be found.</h4> {/* Mensaje de error */}
        <Button variant="primary" as={Link} to="/"> {/* Botón como enlace al inicio */}
          Back to Home {/* Texto del botón */}
        </Button>
      </Col>
    </Row>
  </Container>
);

export default Error; // Exporta el componente Error
