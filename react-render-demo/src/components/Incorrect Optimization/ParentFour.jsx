import React, { act, useState } from 'react';
import { MemoizedChildFive } from './ChildFive';

export const ParentFour = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Aram');

  const person = {
    fname: 'Bruce',
    lname: 'Wayne',
  };

  const handleClick = () => {};

  console.log('ParentFour Render');
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}> Count - {count}</button>
      <button onClick={() => setName('Codevolution')}> Name - {name}</button>
      <MemoizedChildFive name={name} handleClick={handleClick} />
    </div>
  );
};
