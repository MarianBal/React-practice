import React, { Component } from 'react';
import './ejercicioUno.css';

class EjercicioDos extends Component {

  constructor(props){
    super(props);

    this.state={
      name: 'Marian'
    }
  }
 render () {

  return (
    <div className="app-container">
      <h1>Hola, {this.state.name}</h1>
    </div>
  );
 }
}

export default EjercicioDos;
