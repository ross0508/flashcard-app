import React, { useState } from 'react'
import axios from 'axios'
import './DeckCard.css'

export default function DeckCard({ deck_id, name, handleDeleteDeck, handleUpdateDeck }) {
  
const [newName, setNewName] = useState('')
  
  const handleChangeNewName = (e) => {
    setNewName(e.target.value);
  }

  return (
    <div className='deck-card'>
      <button onClick={() => {handleDeleteDeck(deck_id)}}>X</button>
      <h2>{name}</h2>
      <div>
        <input onChange={handleChangeNewName}></input>
        <button onClick={() => {handleUpdateDeck(deck_id, newName)}}>Update</button>
      </div>
    </div>
  )
}
