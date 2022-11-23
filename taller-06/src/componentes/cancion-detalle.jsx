import { useParams } from 'react-router-dom';
import CancionesJSON from '../data/canciones.json';
import Col from 'react-bootstrap/Col';

function createMarkup(html) {
  return { __html: html };
}

function CancionDetalle() {
  let { cancionId } = useParams();
  const cancion = CancionesJSON.find((c) => c.id === +cancionId);
  return (
    <Col className="text-center" md={{ span: 6, offset: 3 }}>
      <h1 className="text-capitalize">{cancion.nombreCancion}</h1>
      <div contentEditable="true" dangerouslySetInnerHTML={createMarkup(cancion.linkVideo)} />

      <ul className="lista-letra">
        {cancion.letra
          .map((l, index) => {
            let items = [];
            if (index % 4 === 0) {
              items.push(<li key={`blank-${index}`}>-</li>);
            }
            items.push(<li key={index}>{l}</li>);
            return items;
          })
          .flat()}
      </ul>
    </Col>
  );
}

export default CancionDetalle;
