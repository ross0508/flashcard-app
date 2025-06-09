import { useState, useEffect } from 'react'
import './Decks.css'
import axios from 'axios'
import DeckCard from './DeckCard/DeckCard.jsx'

export default function Decks() {

  const [deckName, setDeckName] = useState('');
  const [deckList, setDeckList] = useState([])

  useEffect(() => { // Get Decks
    const getDecks = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: `http://localhost:8080/decks`
        })
        console.log(response.data)
        setDeckList(response.data)
      } catch (error) {
        console.error("Error getting decks", error);
      }
    }

    getDecks();
  }, [])

  const handleAddDeck = async () => {
    try {
        const response = await axios({
          method: "POST",
          url: `http://localhost:8080/decks`,
          data: {
            deckName: deckName
          }
        });
        setDeckList(deckList => [...deckList, response.data[0]]);
      } catch (error) {
        console.error("Error adding deck", error);
      }
    };

  const handleDeleteDeck = async (deck_id) => {
    setDeckList(deckList => deckList.filter(deck => deck.deck_id !== deck_id));
    try {
        const response = await axios({
          method: "DELETE",
          url: `http://localhost:8080/decks/${deck_id}`
        });
      } catch (error) {
        console.error("Error deleting deck", error);
      }
  }

  const handleUpdateDeck = async (deck_id, newName) => {
    setDeckList(deckList =>
    deckList.map(deck =>
      deck.deck_id === deck_id ? { ...deck, name: newName } : deck
    )
  );
    try {
        const response = await axios({
          method: "PUT",
          url: `http://localhost:8080/decks/${deck_id}`,
          data: {
            newName: newName
          }
        });
      } catch (error) {
        console.error("Error updating deck", error);
      }
  }

  const handleChangeDeckName = (e) => {
    setDeckName(e.target.value);
  }

  return (
    <div className='title'>
      <h1 className='title'>Decks</h1>
      <input onChange={handleChangeDeckName}></input>
      <button className='decks-button' onClick={handleAddDeck}>Add Deck</button>
      <div>
        {deckList.map((deck) => (
          <DeckCard key={deck.deck_id} deck_id={deck.deck_id} name={deck.name} handleDeleteDeck={handleDeleteDeck} handleUpdateDeck={handleUpdateDeck}></DeckCard>
        ))}
      </div>
    </div>
  )
}
