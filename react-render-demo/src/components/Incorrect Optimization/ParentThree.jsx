import React, { useState } from 'react';
import { MemoizedChildFour } from './ChildFour';

export const ParentThree = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Aram');

  console.log('ParentThree Render');
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}> Count - {count}</button>
      <button onClick={() => setName('Codevolution')}> Name - {name}</button>
      <MemoizedChildFour name={name}>
        {/* <strong>Hello</strong> */}
      </MemoizedChildFour>
    </div>
  );
};
