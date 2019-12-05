import React, { useState, useEffect } from 'react';

function EffectHook () {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    console.log('Montar');
    return () => {
        console.log('Desmontar');
    } //función de limpieza que se ejecuta al desmontar el componente
  }); 

  // Cada vez que cambia un estado/prop del componente, 
  // se desmonta y se vuelve a montar

  return (
    <div>
      <h3>Hiciste click <b>{count}</b> veces</h3>
      <button onClick={() => setCount(count + 1)}>
        Sumar
      </button>
    </div>
  );
};

export default EffectHook;
