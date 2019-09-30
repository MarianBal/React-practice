import React, { Component } from 'react';
import './appDos.css';

class EjercicioOnce extends Component {
  constructor (props) {
    super(props);

    this.state = {
      grades: 0
    };
  }

  toCelcius(e){

    this.setState({
      grades:parseInt(e.target.value)
    })
  }

  render(){

    return (

      <div>
        <div className="blanco">Celcius</div>
        <input type="text" onChange={(e)=>this.toCelcius(e)} value={(5/9) * (this.state.grades - 32)}/>
        <div className="blanco">Fahrenheit</div>
        <input type="text" onChange={()=>this.toFahrenheit} value={1.8 * this.state.grades + 32}/>
      </div>
    );
  }
}

export default EjercicioOnce;
