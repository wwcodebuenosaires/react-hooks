import React, { useState, useEffect } from 'react';

function EffectHook () {
  const [cat, setCat] = useState(null);
  
  // Llamada a una api
  useEffect(() => {
    console.log('Montar');
    async function fetchData() {
      const data = await fetch('https://api.thecatapi.com/v1/images/search?category_ids=2');
      const dataJson = await data.json();
      setCat(dataJson[0]);
    }
    fetchData(); 
  },[]); // Pasando un array vacío, se ejecuta únicamente la primera vez que se monta
  
  return (
    <div>
      <h3>Gatos en el espacio</h3>
      {cat && 
        <img src={cat.url} alt="cat" />
      }
    </div>
  );
};

export default EffectHook;
