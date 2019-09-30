import React, { Component } from 'react';
import './appDos.css';



class EjercicioTres extends Component {
  constructor (props) {
    super(props);

    this.state = {
      name:''
    };

  }

  handleClick () {
    console.log('Hola ' + this.state.name)

  }

  setField (e) {

    this.setState({
      name: e.target.value
    })

  }

  render(){

    return (

      <div>
        <input type="text" onChange={(e)=>this.setField(e)}/>
       <button onClick={()=>this.handleClick()}>Saludar</button>
      </div>
    );
  }
}

export default EjercicioTres;
