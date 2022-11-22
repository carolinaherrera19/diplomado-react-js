import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Recetas from '../data/recetas.json';

function ListaIngredientes(props) {
  return props.ingredientes.map((ingrediente, index) => <li key={index}>{ingrediente}</li>);
}

class Ejercicio02 extends React.Component {
  render() {
    return Recetas.map((receta) => {
      return (
        <Col key={receta.id}>
          <Card>
            <Card.Img variant="top" src={receta.imagen} />
            <Card.Body>
              <Card.Title>{receta.nombre}</Card.Title>
              <h5>Descripcion:</h5>
              <Card.Text>{receta.descripcion}</Card.Text>
              <h5>Ingredientes:</h5>
              <ul>
                <ListaIngredientes ingredientes={receta.ingredientes} />
              </ul>
              <h5>Preparacion:</h5>
              <Card.Text>{receta.preparacion}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      );
    });
  }
}

export default Ejercicio02;
