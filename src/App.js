import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function MyInput() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MyInput/>
        </header>
      </div>
    );
  }
}

export default App;
