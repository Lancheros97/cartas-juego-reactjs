import React, {Component} from 'react';
import './Carta.css';
import FlipCard from 'react-flipcard';
import backFace from './imagenes/kurama-pregunta.jpg'

export default class Carta extends Component {
  render() {
    return (
      <div className="carta" onClick={this.props.seleccionarCarta}>
        <FlipCard
          flipped={this.props.estaSiendoComparada || this.props.fueAdivinada}
          disabled={true}
        >
          <div className="portada">
           <img className='card-image' src={backFace}  alt='' class='imagen'/>
          </div>
          <div className="contenido">
            <i className={`fa ${this.props.icono} fa-5x`}></i>
          </div>
        </FlipCard>
      </div>
    )
  }  
};
