import React, { Component } from 'react';
import './appDos.css';

class EjercicioNueve extends Component {
  constructor (props) {
    super(props);

    this.state = {
      counter:0
    };
  }

  rest () {
    this.setState({
      counter: this.state.counter -1
    })
  };

  plus () {
    this.setState({
      counter: this.state.counter +1
    })
  }


  render(){

    return (

      <div>
        <span>{this.state.counter}</span>
       <button onClick={()=>this.rest()}>-</button>
       <button onClick={()=>this.plus()}>+</button>
      </div>
    );
  }
}

export default EjercicioNueve;
