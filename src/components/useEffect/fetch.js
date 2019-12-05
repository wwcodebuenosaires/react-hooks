import React, { useState, useEffect } from 'react';

function EffectHook () {
  const [name, setName] = useState('');

  // Buscar una api que funcione
  useEffect(() => {
    console.log('Montar');
    async function fetchData() {
      const data = await fetch('https://api.github.com/users/agusdemalde', {
        method: 'GET',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin': '*' },
      });
      const dataJson = await data.json();
      setName(dataJson.name);
    }
    fetchData(); 
  },[]); // Pasando un array vacío, se ejecuta únicamente la primera vez que se monta
  
  return (
    <div>
      <p>Mi nombre es {name}</p>
    </div>
  );
};

export default EffectHook;
