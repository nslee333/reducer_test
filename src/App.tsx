import './App.css';
import { useReducer } from 'react';

function reducer(state: any, action: any) {
  if (action.type === 'incremented_count') {
    return {
      count: state.count + 1
    };
  } else if (action.type === 'decremented_count') {
    return {
      count: state.count - 1
    };
  } else {
    throw Error("Unknown Error.");
  }
}

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
