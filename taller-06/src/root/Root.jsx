import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, useLocation, useRoutes, NavLink } from 'react-router-dom';
import Home from '../pages/home/Home';
import Juego from '../pages/juego/juego';
import Recetas from '../pages/recetas/recetas';
import Canciones from '../pages/canciones/canciones';
import CancionDetalle from '../componentes/cancion-detalle';

const Pages = () => {
  useLocation();
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: 'juegos', element: <Juego /> },
    { path: 'recetas', element: <Recetas /> },
    {
      path: 'canciones',
      children: [
        { path: '', element: <Canciones /> },
        { path: ':cancionId', element: <CancionDetalle /> }
      ]
    }
  ]);
  return routes;
};

class Root extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar bg="primary" variant="dark" expand="lg">
          <Container>
            <NavLink className="navbar-brand" to="/">
              Taller-05
            </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavLink className="nav-link" to="/juegos">
                  Juegos
                </NavLink>
                <NavLink className="nav-link" to="/recetas">
                  Recetas
                </NavLink>
                <NavLink className="nav-link" to="/canciones">
                  Canciones
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container>
          <Row className="mt-4">
            <Pages />
          </Row>
        </Container>
      </BrowserRouter>
    );
  }
}

export default Root;
