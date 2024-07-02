import './App.css';
import Boton from './componentes/boton';
import Contador from './componentes/contador';
import { useState } from 'react';

function App() {

const [num , setnum]= useState(0);

  const manejarClick = () => {
    setnum(num + 1 );
  }

  const reinicarContador = () => {
    setnum(0);
  }
  
 return (
    <div className="App">
      <h1 className='titulo'> Contador de clics</h1> 
      <div className='contenedor-principal'>
        <Contador num={num}/>
        <Boton
        texto='Clic'
        esBotonDeClic={true}
        manejarClick={manejarClick} />
        <Boton
        texto='Reiniciar'
        esBotonDeClic={false}
        manejarClick={reinicarContador} />
        
      </div>
    </div>

    
  );
}

export default App;
