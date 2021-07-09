import React from 'react';
import FoodForm from './pages/FoodForm/FoodForm';

let root = document.documentElement;

window.addEventListener('load', () => {
  let vh = window.innerHeight / 100;
  root.style.setProperty('--vh', vh);
});

window.addEventListener('orientationchange', () => {
  window.location.reload();
});

function App() {
  return (
    <>
      <FoodForm />
    </>
  );
}

export default App;
