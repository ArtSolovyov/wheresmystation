import './App.css';
import React, {useState} from 'react';
import Map from './map';
import MainModal from './modal';
import Station from './station';

function App() {

  const [modalOpen, setModalOpen] = useState(true);

  const getModalState = (state) => {
    setModalOpen(state);
  }

  return (
    <div className="App">
      <Map />
      <MainModal getModalState={getModalState} />
      <Station isModalOpen={modalOpen} />
    </div>
  );
}

export default App;
