import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function ListaIngredientes(props) {
  return props.ingredientes.map((ingrediente, index) => <li key={index}>{ingrediente}</li>);
}

class Ejercicio02 extends React.Component {
  recetas = [
    {
      id: 1,
      nombre: 'PIERNA DE CERDO ADOBADA CON NARANJA'.toLowerCase(),
      imagen: 'https://cdn7.kiwilimon.com/recetaimagen/37387/47135.jpg',
      ingredientes: [
        '1/4 cebollas',
        '2 dientes de ajo',
        '6 chiles guajillos, sin rabo, sin venas ni semillas y previamente hidratado en agua caliente',
        '5 chiles anchos, sin rabo, sin venas ni semillas y previamente hidratado en agua caliente',
        '1/4 tazas de vinagre de manzana',
        '1 cucharadita de comino',
        '1 cucharadita de orégano',
        '1/2 tazas de caldo de pollo',
        '1 taza de Salsa de naranja Kikkoman®',
        'suficiente de pimienta',
        '2 kilos de pierna de cerdo',
        'verduras, rostizadas, para acompañar',
        'suficiente de puré de papa, para acompañar'
      ],
      preparacion:
        'En un comal asa la cebolla junto con el ajo, hasta que la piel comience a tener un tono oscuro. Retira. Licúa la cebolla con el ajo, el chile guajillo, el chile ancho, el vinagre de manzana, el comino, el orégano y el caldo de pollo hasta integrar por completo. Vierte en un bowl la mezcla anterior, añade la Salsa de naranja Kikkoman® y sazona con suficiente pimienta, mezcla hasta integrar los ingredientes. Precalienta el horno a 200 °C. En un recipiente para hornear previamente engrasado, coloca la pierna y báñala con el adobo hasta cubrir por completo. Tapa con papel aluminio y cocina por 1 hora y 15 minutos, a 200 °C. Retira del horno, quita el aluminio de la pierna y hornea por 15 minutos más a la misma temperatura. Retira del horno. Corta en rebanadas y sirve con verduras rostizada y puré de papa.'
    },
    {
      id: 2,
      nombre: 'PASTA FRÍA CON PIÑA Y MANZANA'.toLowerCase(),
      imagen: 'https://cdn7.kiwilimon.com/recetaimagen/37512/47388.jpg',
      ingredientes: [
        '2 tazas de pasta de coditos, cocida',
        '1 taza de uva',
        '1 taza de piña',
        '1 taza de manzana',
        '1/2 tazas de apio',
        '1/2 tazas de nuez, finamente picada',
        '1/4 tazas de McCormick Balance® Mayonesa con Aceite de Aguacate',
        '1 1/2 tazas de crema ácida',
        'al gusto de sal y pimienta'
      ],
      preparacion:
        'Mezcla la crema ácida con la Mayonesa Balance McCORMICK® con aceite de aguacate. En un bowl. Reserva. En una tabla corta las uvas a la mitad y la piña, la manzana, y el apio en cubos pequeños. Reserva. Mezcla la pasta con las uvas, la piña, la manzana, el apio y la nuez. Agrega a la pasta la salsa de Mayonesa Balance McCORMICK® con aceite de aguacate, sazonar con sal y pimienta, y mezcla. Sirve sobre una ensaladera y disfruta con un rico lomo adobado.'
    },
    {
      id: 2,
      nombre: 'PORK BELLY GLASEADO CON MANZANA',
      imagen: 'https://cdn7.kiwilimon.com/recetaimagen/37459/47305.jpg',
      ingredientes: [
        '3 manzanas amarillas, sin piel ni corazón, cortadas en medias lunas',
        'suficiente de agua, para las manzanas',
        '1 raja de canela, para las manzanas',
        '2 cucharadas de ajo, finamente picado, para el glaseado',
        '1/2 tazas de vinagre de arroz, para el glaseado',
        '1 1/2 tazas de Salsa Agridulce Kikkoman®',
        '1/4 tazas de mantequilla, en cubos pequeños, para engrasar',
        '1.5 kilos de pork belly',
        '1/2 tazas de papa cambray, rosa, en mitades, para acompañar',
        '1 taza de camote, dulce, sin piel, en cuartos',
        'suficiente de tomillo fresco, para decorar'
      ],
      preparacion:
        'Coloca las manzanas en una olla, vierte agua hasta cubrir y añade una raja de canela, cocina a fuego medio alto por aproximadamente 10 minutos, o hasta que la fruta esté suficientemente blanda. Retira la raja de canela, escurre y coloca la fruta en un bowl amplio. Deja enfriar. Haz puré la manzana con ayuda de un vaso o un aplasta papas. Una vez que tengas el puré, añade la mostaza, el vinagre de arroz, el ajo, la Salsa Agridulce Kikkoman® y mezcla hasta integrar. Reserva. Precalienta el horno a 220 °C. Brida el pork belly apoyándote de hilo de algodón de aproximadamente 2 metros de largo. Acomoda la pieza de carne procurando darle forma de cilindro. Haz un nudo (con ayuda del hilo) en uno de los extremos, sin apretar demasiado, y comienza a hacer lazadas rodeando la carne, tomando en cuenta que el primer nudo es la base de todo el bridado, poco a poco observarás como la carne va teniendo la forma deseada. Coloca el pork belly bridado en un recipiente apto para hornear, agrega la mantequilla en cubos alrededor de la pieza de carne. Vierte la mezcla agridulce hasta cubrir el corte de carne por completo. Coloca la papa cambray rosa, la papa cambray blanca y el camote en los espacios vacíos del recipiente. Hornea por 60 minutos a 220 °C, o hasta que esté bien cocido. Recuerda que al hornearlo deberás de colocar una ollita con agua debajo de la rejilla donde pondrás la pieza de carne, para que no le falte humedad y así evitar su resequedad. Retira la pieza del horno, corta en rebanadas delgadas, sirve y acompaña con las papas y camote rostizado, decora con tomillo fresco.'
    }
  ];

  render() {
    return this.recetas.map((receta) => {
      return (
        <Col key={receta.id}>
          <Card>
            <Card.Img variant="top" src={receta.imagen} />
            <Card.Body>
              <Card.Title>{receta.nombre}</Card.Title>
              <h5>
                <Card.Text>Ingredientes:</Card.Text>
              </h5>
              <Card.Text>
                <ul>
                  <ListaIngredientes ingredientes={receta.ingredientes} />
                </ul>
              </Card.Text>
              <h5>
                <Card.Text>Preparacion:</Card.Text>
              </h5>
              <Card.Text>{receta.preparacion}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      );
    });
  }
}

export default Ejercicio02;
