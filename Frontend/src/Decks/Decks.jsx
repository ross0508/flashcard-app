import React from 'react'
import './Decks.css'

const handleAddDeck = () => {
  // Add Deck
}

const handleRemoveDeck = (deckId) => {
  // Remove Deck
}

const handleUpdateDeck = (deckId) => {
  // Update Deck
}

export default function Decks() {
  return (
    <div className='title'>
      <h1 className='title'>Decks</h1>
      <button className='decks-button' onClick={handleAddDeck}>Add Deck</button>
    </div>
  )
}
