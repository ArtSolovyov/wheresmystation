import './App.css';
import React from 'react';
import Map from './map';
import MainModal from './modal';
import Station from './station';

function App() {

  return (
    <div className="App">
      <Map />
      <MainModal />
      <Station/>
    </div>
  );
}

export default App;
