import centralPerkLogo from './imgs/central_perk_logo.jpeg';
import React, { Fragment } from "react";
import './App.css';
import Card from './components/card'

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor: 'white'}}>
        <img src={centralPerkLogo} alt="logo" style={{width: '20%'}}/>
        <p style={{color: 'black'}}>
          Try some of our most popular flavours!
        </p>
        <Card />
      </header>
    </div>
  );
}

export default App;
