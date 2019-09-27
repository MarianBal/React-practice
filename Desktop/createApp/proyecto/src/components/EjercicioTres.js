import React, { Component } from 'react';
import './appDos.css';
import HolaMundo from './HolaMundo';


class EjercicioTres extends Component {

  state = {

  }

  render(){

    return (
      <div className="app-dos">
        Algo
        <HolaMundo name={this.props.name}/>
      </div>
    );
  }
}

export default EjercicioTres;
