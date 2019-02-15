import React from 'react';
import './App.css';
import Navigation from './Navigation/Navigation.js';
import Menu from './Menu/Menu.js';


class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="App">
          <Navigation
          />
          <Menu
          />
      </div>
    );
  }
}

export default App;
