import './App.css';
import { BackgroundContext } from './components/contexts/index.js'
import { Consumidor } from './components/consumidor/index.js'
import { theme } from './components/contexts/ThemeContext'
import { useState } from 'react';

function App() {

  const [tema, setTema] = useState(theme.light.background) 

  return (
    <>
    <BackgroundContext.Provider value={{tema, setTema}}>
      <Consumidor/>

    </BackgroundContext.Provider>

    </>
  );
}

export default App;
