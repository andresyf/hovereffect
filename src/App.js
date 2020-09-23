import React from 'react';
import image from './images/card2.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <img src={image} alt="card"></img>
          <img src={image} alt="card"></img>
          <img src={image} alt="card"></img>
          <img src={image} alt="card"></img>
        </div>
      </header>
    </div>
  );
}

export default App;
