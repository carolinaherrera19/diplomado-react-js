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
          path="/ejercicio-01"
          urlImage="https://m.media-amazon.com/images/I/51MSRaazr5L.png"></CardCustom>
      </Col>
      <Col sm="4">
        <CardCustom
          title="Ejericio 02"
          text="Recetas Navidenas"
          textButton="Ver..."
          path="/ejercicio-01"
          urlImage="https://files.rcnradio.com/styles/imagen_full/public/2021-12/natilla_0.jpg.webp?VersionId=XgUyXqPSwZbLB6ZGjoPF.CfDbBC34xpM&itok=y5hj2TUH"></CardCustom>
      </Col>
      <Col sm="4">
        <CardCustom
          title="Ejericio 03"
          text="Canciones Navidenas"
          textButton="Ver.."
          path="/ejercicio-01"
          urlImage="https://i.musicaimg.com/playlists/canciones-navidenas.jpg"></CardCustom>
      </Col>
    </>
  );
}

export default Home;
