import React, { Component } from 'react';

class OpenModal extends Component {

  render(){

    return (

      <div className="modal">
        <h2>Soy un OpenModal</h2>
        <button onClick={()=>this.props.closeModal()}>cerrar</button>
      </div>
    );
  }
}

export default OpenModal;

