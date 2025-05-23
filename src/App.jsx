import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Decks from './Decks/Decks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Decks></Decks>
    </>
  )
}

export default App
