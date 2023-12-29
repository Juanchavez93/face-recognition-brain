import React from 'react';
import './App.css';
import ParticlesBg from 'particles-bg'
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';

function App() {
  return (
    <div className="App">
      <ParticlesBg num={5} type="color" bg={true} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
{/*
      <FaceRecognition /> */}
    </div>
  );
}

export default App;