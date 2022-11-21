import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import './ejercicio-01.scss';

const MySwal = withReactContent(Swal);

class Ejercicio01 extends React.Component {
  numeroIncognito = 0;
  constructor(props) {
    super(props);
    this.state = { intentos: 0, mensajeIntento: undefined, buttonEnable: false };
    this.handleClick = this.handleClick.bind(this);
    this.intentarDeNuevo = this.intentarDeNuevo.bind(this);
    this.changeInput = this.changeInput.bind(this);
    this.inputRef = React.createRef();
    this.numeroIncognito = Math.floor(Math.random() * (100 - 1 + 1) + 1);
  }

  handleClick() {
    this.setState((previousValue) => ({
      intentos: previousValue.intentos + 1
    }));
    console.log({ numeroIncognito: this.numeroIncognito });
    const numeroNuevo = +this.inputRef.current.value;
    if (numeroNuevo === this.numeroIncognito) {
      MySwal.fire({
        icon: 'success',
        title: <p>Felicidades</p>
      });
      this.intentarDeNuevo();
    } else if (numeroNuevo < this.numeroIncognito) {
      this.setState({ mensajeIntento: 'Usted escribio un numero menor' });
    } else {
      this.setState({ mensajeIntento: 'Usted escribio un numero mayor' });
    }
  }

  intentarDeNuevo() {
    this.setState({ intentos: 0, mensajeIntento: undefined });
    this.numeroIncognito = Math.floor(Math.random() * (100 - 1 + 1) + 1);
    if (this.inputRef.current) {
      this.inputRef.current.value = '';
    }
  }

  changeInput(event) {
    const buttonEnable = event.target.value.length === 0 ? false : true;
    this.setState({ buttonEnable });
  }

  render() {
    if (this.state.intentos === 10) {
      return (
        <>
          <h1 className="display-1 text-center text-danger my-5">Perdiste</h1>
          <Button onClick={this.intentarDeNuevo}>Intetar de Nuevo</Button>
        </>
      );
    }
    return (
      <>
        <Row>
          <Col className="d-flex align-items-end">
            <h1>Adivine el Numero</h1>
          </Col>
          <Col className="d-flex align-items-end">
            <p className="mb-2 lead">
              Intento # <span className="badge bg-info">{this.state.intentos}</span>
            </p>
          </Col>
        </Row>
        <Row>
          <input
            type="number"
            min="1"
            max="100"
            ref={this.inputRef}
            onChange={this.changeInput}
            className="input"
          />
        </Row>
        <Row>
          <p className="my-4 text-center text-warning">{this.state.mensajeIntento}</p>
        </Row>
        <Row>
          <Button disabled={!this.state.buttonEnable} onClick={this.handleClick}>
            Seleccionar
          </Button>
        </Row>
      </>
    );
  }
}

export default Ejercicio01;
