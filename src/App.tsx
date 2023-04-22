import './App.css';
import { useReducer } from 'react';
import { reducer } from './reducer';


function App() {
  const initialState = {count: 1};
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <div>Current Count: {state.count}</div>
      <button onClick={() => dispatch({type: 'incremented_count'})}>increment</button>
      <button onClick={() => dispatch({type: 'decremented_count'})}>decrement</button>
    </div>
  );
}

export default App;
