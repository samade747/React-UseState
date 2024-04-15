import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function Counter() {

 count [count, setCount] = useState(0)


  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      
    </div>
  );
}

export default Counter;
