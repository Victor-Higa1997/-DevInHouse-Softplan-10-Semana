import { AutenticacaoContext } from './components/AutenticacaoContext';
import { Consumidor, Consumidor2 } from './components/index';
import './App.css';
import { useState } from 'react';

function App() {
  const [nome, setNome] = useState('Victor')
  const [autenticado, setAutenticado] = useState(false)
  return (
    <>

    <AutenticacaoContext.Provider value={{autenticado, setAutenticado, nome, setNome}}>
      <Consumidor/> 

      <Consumidor2/> 
    </AutenticacaoContext.Provider>
    
    </>
  );
}

export default App;
