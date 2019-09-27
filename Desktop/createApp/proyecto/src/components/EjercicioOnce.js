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
    console.log(this.state.grades)
  }

  render(){

    return (

      <div>
        <div>Celcius</div>
        <input type="text" onChange={(e)=>this.toCelcius(e)} value={this.state.grades}/>
        <div>Fahrenheit</div>
        <input type="text" onChange={()=>this.toFahrenheit} value={this.state.grades}/>
      </div>
    );
  }
}

export default EjercicioOnce;
