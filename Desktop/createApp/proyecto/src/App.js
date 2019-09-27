import React, { Component } from 'react';
import './App.css';
//import EjercicioOcho from './components/EjercicioOcho';
import EjercicioNueve from './components/EjercicioNueve';
// import EjercicioUno from './components/EjercicioUno';
// import EjercicioDos from './components/EjercicioDos';
//import EjercicioTres from './components/EjercicioTres';
//import EjercicioCuatro from './components/EjercicioCuatro';

class App extends Component {

  state = {
    name:'Grace'
  }

  render(){

    return (
      //<EjercicioUno/>
      //<EjercicioDos/>
      // <EjercicioTres name={this.state.name}/>
      //<EjercicioCuatro/>
      //<EjercicioOcho/>
      <EjercicioNueve/>
    );
  }
}

export default App;
