import React, { useState } from 'react';
import { MemoizedChildTwo } from './ChildTwo';

export const ParentTwo = () => {
  const [count, setCount] = useState(0);
const [name, setName] = useState('Aram');

  console.log('ParentTwo Render');
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}> Count - {count}</button>
      <button onClick={() => setName('Codevolution')}> Name - {name}</button>
      <MemoizedChildTwo name={name}/>
    </div>
  );
};
