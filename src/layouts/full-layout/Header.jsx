import React from "react"; // Importa React
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'; // Importa componentes de React Bootstrap

function Header() {
  // Define las páginas y configuraciones disponibles del nav
  const pages = ["Products", "Pricing", "Blog"];
  const settings = ["Profile", "Account", "Dashboard", "Logout"];

  return (
    <Navbar bg="dark" variant="dark" expand="lg"> {/* Barra de navegación con tema oscuro y expansión para dispositivos grandes */}
      <Container> {/* Contenedor para limitar el ancho del contenido */}
        <Navbar.Brand href="/">INICIO</Navbar.Brand> {/* Enlace del logo o nombre de la marca */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" /> {/* Botón de alternancia para dispositivos móviles */}
        <Navbar.Collapse id="basic-navbar-nav"> {/* Contenido colapsable de la barra de navegación */}
          <Nav className="me-auto"> {/* Navegación izquierda */}
            {pages.map((page) => (
              <Nav.Link key={page} href={`/${page.toLowerCase()}`}> {/* Enlace para cada página */}
                {page}
              </Nav.Link>
            ))}
          </Nav>
          <Nav> {/* Navegación derecha */}
            <NavDropdown title="Settings" id="basic-nav-dropdown"> {/* Menú desplegable de configuraciones */}
              {settings.map((setting) => (
                <NavDropdown.Item key={setting} href={`/${setting.toLowerCase()}`}> {/* Opción de configuración */}
                  {setting}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header; // Exporta el componente Header
