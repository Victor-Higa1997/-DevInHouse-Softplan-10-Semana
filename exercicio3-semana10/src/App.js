import { useReducer } from 'react';
import './App.css';


const initialState = []

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return [...state, Date()]
    case 'decrement':
      //datas.pop()
      return state.slice(0, -1)
    default:
      return state
  }
}
/* const [state, dispatch] = useReducer(reducer, initialState) */



function App() {

  const [state, dispatch] = useReducer(reducer, initialState)


  return (
    <div className="App">
      <div>
        <h2>Lista de datas</h2>
        <input type='button' value='Adicionar' onClick={() => dispatch({ type: 'increment' })} />
        <input type='button' value='Remover' onClick={() => dispatch({ type: 'decrement' })} />
      </div>
      <ul>
        {state.map((e, index) =>
          (<li key={index} > {e} </li>))}
      </ul>

    </div>
  );
}

export default App;
