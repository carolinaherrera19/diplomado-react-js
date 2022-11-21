import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, useLocation, useRoutes, NavLink } from 'react-router-dom';
import Home from '../home/Home';
import Ejercicio01 from '../ejercicio-01/ejercicio-01';
import Ejercicio02 from '../ejercicio-02/Ejercicio-02';
import Ejercicio03 from '../ejercicio-03/Ejercicio-03';

const App = () => {
  useLocation();
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: 'ejercicio-01', element: <Ejercicio01 /> },
    { path: 'ejercicio-02', element: <Ejercicio02 /> },
    { path: 'ejercicio-03', element: <Ejercicio03 /> }
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
                <NavLink className="nav-link" to="/ejercicio-01">
                  Ejercicio 01
                </NavLink>
                <NavLink className="nav-link" to="/ejercicio-02">
                  Ejercicio 02
                </NavLink>
                <NavLink className="nav-link" to="/ejercicio-03">
                  Ejercicio 03
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container>
          <Row className="mt-4">
            <App />
          </Row>
        </Container>
      </BrowserRouter>
    );
  }
}

export default Root;
