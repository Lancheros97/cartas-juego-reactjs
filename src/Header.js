import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header> 
        <div className="titulo">JUEGO DE CARTAS</div>
          <div>
            <button className="boton-reiniciar" onClick={this.props.resetearPartida}>
              Reiniciar
            </button>
           {/*  <button className="boton-reiniciar" onClick={this.props.voltearPartida}>
              Voltear cartas
            </button> */}
        </div>
        <div className="titulo">
          Intentos: {this.props.numeroDeIntentos}
        </div>
      </header>
    );
  }
};
