import React, { Component, useState } from 'react';
import { hot } from 'react-hot-loader';
import Toolbar from '@material-ui/core/Toolbar';
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
          <Toolbar>
            
          </Toolbar>
          <MyInput/>
        </header>
      </div>
    );
  }
}

export default hot(module)(App);
