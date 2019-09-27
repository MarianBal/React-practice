import React, { Component } from 'react';
import './appDos.css';

class EjercicioOcho extends Component {
  constructor (props) {
    super(props);

    this.state = {
      counter:0
    };
  }

  handleCounter () {
    this.setState({
      counter: this.state.counter +1
    })

  }


  render(){

    return (

      <div>
       <button onClick={()=>this.handleCounter()}>{this.state.counter}</button>
      </div>
    );
  }
}

export default EjercicioOcho;
