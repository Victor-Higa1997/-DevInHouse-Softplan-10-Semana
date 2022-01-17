import { useReducer, useState } from 'react';
import './App.css';

const initialState = { result: 0 }

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'somar':
      console.log(state.result)
      return { result: parseInt(state.result) + parseInt(payload) }
    case 'subtrair':
      return { result: parseInt(state.result) - parseInt(payload) }
    case 'multiplicar':
      return { result: parseInt(state.result) * parseInt(payload) }
    case 'dividir':
      {
        /* console.log(payload, state.payload) */
        if (parseInt(payload) === 0) {
          return state
        }
        else {
          return { result: parseInt(state.result) / parseInt(payload) }
        }
      }

    default:
      return state
  }
}

function App() {

  const [number, setNumber] = useState(0)
  const [operacao, setOperacao] = useState('somar')
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <div>
        <input type='number' value={number} onChange={(event) => { setNumber(event.target.value) }} />
        {console.log(number)}
        <select name='operacoes' value={operacao} onChange={(event) => { setOperacao(event.target.value) }}>
          {console.log(operacao)}
          <option value='somar'>Somar</option>
          <option value='subtrair'>Subtrair</option>
          <option value='multiplicar'>Multiplicar</option>
          <option value='dividir'>Dividir</option>
        </select>
        <button onClick={() => dispatch({ type: operacao, payload: number })}>Confirmar</button>
      </div>

      {/* <p>resultado..</p> */}
      <p>{state.result}</p>
    </>
  )
}

export default App;
