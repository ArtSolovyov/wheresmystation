import './App.css';
import React from 'react';
import Map from './map';
import MainModal from './modal';
import Station from './station';
import Info from './info';

function App() {

  return (
    <div className="App">
      <Info />
      <Map />
      <MainModal />
      <Station />
    </div>
  );
}

export default App;
