import React from 'react';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import CancionesJSON from '../data/canciones.json';
import ItemCancion from '../componentes/item-cancion';

class Canciones extends React.Component {
  render() {
    const lista = CancionesJSON.map((cancion) => (
      <ItemCancion
        key={cancion.id}
        name={cancion.nombreCancion}
        id={cancion.id}
        autor={cancion.autor}
      />
    ));
    return (
      <Col md={{ span: 6, offset: 3 }}>
        <h1 className="text-capitalize">canciones navideñas</h1>
        <ListGroup>{lista}</ListGroup>
      </Col>
    );
  }
}
export default Canciones;
