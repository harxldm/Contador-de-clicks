import React from 'react';
import '../hojas-de-estilo/contador.css';

function Contador ({num}){
    return (
        <div className='contador'>
            {num}
        </div>
    );
}

export default Contador;