import React, { useState, useEffect } from 'react';

function EffectHook() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Sabri');

    useEffect(() => {
        console.log('Update count');
        document.title = `Hiciste click ${count} veces`;
    }, [count]); 
    // Al montarse el componente y siempre que se actualice count

    useEffect(() => {
        console.log('Update name');
        document.title = `Mi nombre es ${name}`;
    }, [name]); 
    // Al montarse el componente y siempre que se actualice name

    return (
        <div>
            <h3>Hiciste click <b>{count}</b> veces</h3>
            <button onClick={() => setCount(count + 1)}>
                Sumar
            </button>
            <br />
            <h3>Mi nombre es: <b>{name}</b></h3>
            <button onClick={() => name === 'Agus' ? setName('Sabri') : setName('Agus')}> 
                Cambiar nombre
            </button>
        </div>
    );
};

export default EffectHook;
