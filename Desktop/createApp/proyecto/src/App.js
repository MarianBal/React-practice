import React, { Component } from 'react';
import './App.css';
//import EjercicioOcho from './components/EjercicioOcho';
//import EjercicioNueve from './components/EjercicioNueve';
//import EjercicioOnce from './components/EjercicioOnce';
// import EjercicioUno from './components/EjercicioUno';
// import EjercicioDos from './components/EjercicioDos';
//import EjercicioTres from './components/EjercicioTres';
//import EjercicioCuatro from './components/EjercicioCuatro';
//import EjercicioDosHooks from './components/EjercicioDosHooks';
//import Modal from './components/Modal';
import ModalConHook from './components/ModalConHook';

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
      //<EjercicioNueve/>
      //<EjercicioOnce/>
      //<EjercicioDosHooks/>
      //<Modal/>
      <ModalConHook/>
    );
  }
}

export default App;
