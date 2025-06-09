import React from 'react'
import axios from 'axios'
import './DeckCard.css'

export default function DeckCard({ deck_id, name, handleDeleteDeck }) {
  

  

  return (
    <div className='deck-card'>
      <button onClick={() => {handleDeleteDeck(deck_id)}}>X</button>
      <h2>{name}</h2>
    </div>
  )
}
