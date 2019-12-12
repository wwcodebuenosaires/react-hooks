import React, { useState } from 'react';

function StateHook() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>Hiciste click <b>{count}</b> veces</h3>
      <button onClick={() => setCount(count + 1)}>
        Sumar
      </button>
    </div>
  );
};

export default StateHook;
