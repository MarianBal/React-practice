import React, { Component } from 'react';
import './hola-mundo.css';


class HolaMundo extends Component {

  render(){
    return (
      <div className="hola-mundo">
        ¡Hola, {this.props.name}!
      </div>
    );
  }
}

export default HolaMundo;
