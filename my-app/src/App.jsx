import React from 'react'
import "./App.css";
import RandomColor from './components/RandomColor/RandomColor'
import Accordian from './components/accordian/Accordian';

const App = () => {
  return (
    <div className='App'>
      <Accordian/>
      <RandomColor/>
    </div>
  )
}

export default App