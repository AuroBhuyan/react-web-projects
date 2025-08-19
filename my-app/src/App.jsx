import React from 'react'
import "./App.css";
import Accordian from './components/accordian/Accordian'
import RandomColor from './components/RandomColor/RandomColor'

const App = () => {
  return (
    <div className='App'>
      <Accordian/>
      <RandomColor/>
    </div>
  )
}

export default App