import React, { Component } from 'react';
import './appDos.css';
import OpenModal from './OpenModal';



class Modal extends Component {

  state = {
    modal: false
  }

  openModal(){
    this.setState({
      modal:true
    })
  };

  closeModal = () =>{
    this.setState({
      modal:false
    })
  };

  render(){

    return (
      <div>
        <button onClick={()=>this.openModal()}>Botón</button>
        {this.state.modal ? <OpenModal closeModal={this.closeModal}/> : ''}
      </div>

    );
  }
}

export default Modal;
