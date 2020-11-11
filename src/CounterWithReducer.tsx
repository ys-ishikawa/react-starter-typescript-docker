import React, { useReducer } from 'react';

type StateType = {
    count: number;
}
const initialState = {count: 0};

type ActionType = {
    type: 'increment' | 'decrement' | 'reset';
}

function reducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    case 'reset':
        return initialState
    default:
      throw new Error();
  }
}

function CounterWithReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
    </>
  );
}
export default CounterWithReducer;