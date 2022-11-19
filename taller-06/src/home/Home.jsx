import './Home.scss';
import Col from 'react-bootstrap/Col';
import CardCustom from '../componentes/card-custom';

function Home() {
  return (
    <>
      <Col sm="4">
        <CardCustom
          title="Ejericio 01"
          text="Adivina el numero"
          textButton="Jugar"
          path="/ejercicio-01"></CardCustom>
      </Col>
      <Col sm="4">
        <CardCustom
          title="Ejericio 02"
          text="Recetas Navidenas"
          textButton="Ver..."
          path="/ejercicio-01"></CardCustom>
      </Col>
      <Col sm="4">
        <CardCustom
          title="Ejericio 03"
          text="Canciones Navidenas"
          textButton="Ver.."
          path="/ejercicio-01"></CardCustom>
      </Col>
    </>
  );
}

export default Home;
