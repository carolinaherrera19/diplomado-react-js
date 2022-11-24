import { useParams } from 'react-router-dom';
import CancionesJSON from '../data/canciones.json';
import Col from 'react-bootstrap/Col';

function createMarkup(html) {
  return { __html: html };
}

function CancionDetalle() {
  const { cancionId } = useParams();
  const cancion = CancionesJSON.find((c) => c.id === +cancionId);
  return (
    <Col className="text-center" md={{ span: 6, offset: 3 }}>
      <h1 className="text-capitalize">{cancion.nombreCancion}</h1>
      <div dangerouslySetInnerHTML={createMarkup(cancion.linkVideo)} />

      <ul className="lista-letra">
        {cancion.letra.map((l, index) => (
          <li key={index}>{l}</li>
        ))}
      </ul>
    </Col>
  );
}

export default CancionDetalle;
