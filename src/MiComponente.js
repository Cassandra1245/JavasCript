
import React from 'react';

function MiComponente() {
  let contador_1 = 0  
  let contador_2 = 0  
  const coche = {matricula: 'prueba', marca: 'peugeout'}
  const handleClick = (event) => {

    console.log("Antes = " + coche)
    coche['ruedas'] = '4'
    console.log("Despues = " + coche)

    if (event.target.id == "boton_1"){
        contador_1++;
        event.target.textContent = "Has pulsado el boton " +contador_1 +" veces"
    } else {
        contador_2++;
        event.target.textContent = "Has pulsado el boton " +contador_2 +" veces"
    }
    
    
  };
  return (
    <>
    <button onClick={(e)=>handleClick(e)} id ="boton_1">Haz clic aquí</button>
    <button onClick={(e)=>handleClick(e)} id ="boton_2">Haz clic aquí</button>
    </>
  );
}

export default MiComponente
