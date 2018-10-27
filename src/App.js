import React, { useState } from 'react';
import './App.css';

import ActualMenu from './ActualMenu';
import Carousel from './Carousel';

function MenuNav({setIndex, currentIndex}) {
  // Declare a new state variable, which we'll call "count"
  

  return (
    <div className='menu-nav'>
      {/* This is the main navigation for the menu page */}
        <MyButton currentIndex={currentIndex} click={setIndex} index={0} name={0} />
        <MyButton currentIndex={currentIndex} click={setIndex} index={1} name={1} />
        <MyButton currentIndex={currentIndex} click={setIndex} index={2} name={2} last />
    </div>
  );
}


function MyButton({currentIndex, click, index, name, last}) {
  const indexEquals = currentIndex === index;

  let buttonClass;
  if(last){
    if(indexEquals){
      buttonClass = 'underline-last-button';
    } else {
      buttonClass = 'last';
    }
  } else {
    if(indexEquals){
      buttonClass = 'underline-button';
    } else {
      buttonClass =  'Control-button';
    }
  }
  return (
    <button 
      className={buttonClass}
      onClick={() => click(index)}
    >
      {name}
    </button>
  );
}

function Menu({currentIndex}){
  return (
    <ActualMenu>
      data about menus based off of {currentIndex}
      <Carousel />
    </ActualMenu>
  );
}

function  App() {
  const [index, setIndex] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <MenuNav setIndex={setIndex} currentIndex={index}/>
      </header>
      <Menu currentIndex={index} />
    </div>
  );
}

export default App;
