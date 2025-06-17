import { useState } from 'react';
import './App.css';
import { ArrayUseState } from './components/Immutable State/ArrayUseState';
import { ObjectUseReducer } from './components/Immutable State/ObjectUseReducer';
import { ObjectUseState } from './components/Immutable State/ObjectUseState';
import { UseReducer } from './components/UseReducer/UseReducer';
import { UseState } from './components/UseState/UseState';
import { ArrayUseReducer } from './components/Immutable State/ArrayUseReducer';

function App() {
  return (
    <>
      <ArrayUseReducer />
    </>
  );
}

export default App;
