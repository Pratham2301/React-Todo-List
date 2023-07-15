import React from 'react';
import './App.css'
import Navbar from './components/Navbar';
import Todo from './components/Todo';

function App() {

  window.addEventListener("contextmenu", (e) => e.preventDefault());

  
  return (
    <>
      <Navbar />
      <Todo />
    </>
  );
}

export default App;
