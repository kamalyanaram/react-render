import React, { useMemo, useReducer } from 'react';

const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

export const UseReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  console.log('UseReducer Render');

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => dispatch({ type: 'increment' })}>increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
    </div>
  );
};
