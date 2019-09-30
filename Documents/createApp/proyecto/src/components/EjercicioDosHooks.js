import React, { useState } from 'react';
import './ejercicioUno.css';

function EjercicioDosHook(){
  const [nombre, setNombre ]= useState('');

  return (
    <div>
      <input type="text" onChange={(e)=>setNombre(e.target.value)}/>
      <h1>Hola, {nombre}</h1>
    </div>
  )
}

export default EjercicioDosHook;
