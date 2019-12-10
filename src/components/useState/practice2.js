import React, { useState } from 'react';

function StateHook() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>Hiciste click <b>{count}</b> veces</h3>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Sumar</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>Restar</button>
      <button onClick={() => setCount(0)}>Reiniciar</button>
    </div>
  );
};

export default StateHook;
