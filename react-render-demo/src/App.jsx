import { useState } from 'react';
import './App.css';
import { ContextParent } from './components/Context/ContextParent';
import { ChildA } from './components/Context/ContextChildren';

function App() {
  return (
    <>
      <ContextParent>
        <ChildA />
      </ContextParent>
    </>
  );
}

export default App;
