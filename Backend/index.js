const PORT = 8080;
const cors = require("cors");
const pool = require("./db");

const express = require("express");
app = express();
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log("Running on localhost:" + PORT);
});

// Endpoints

app.get("/decks", async (req, res) => {
  const decks = await pool.query("SELECT * FROM decks");
  res.status(200).json(decks.rows);
});

app.post("/decks", async (req, res) => {
  deckName = req.body.deckName;
  if (!deckName) {
    return res.status(400).json({ error: "Deck name is required" });
  }
  const deck = await pool.query(
    "INSERT INTO decks (name) VALUES ($1) RETURNING *",
    [deckName]
  );
  res.status(200).json(deck.rows);
});

app.put("/decks/:deck_id", async (req, res) => {
  const { deck_id } = req.params;
  const newName = req.body.newName;
  const deck = await pool.query(
    "UPDATE decks SET name = ($1) WHERE deck_id = ($2) RETURNING *",
    [newName, deck_id]
  );
  res.status(200).json("Deck updated successfully");
});

app.delete("/decks/:deck_id", async (req, res) => {
  const { deck_id } = req.params;
  const deck = await pool.query(
    "DELETE FROM decks WHERE deck_id = ($1) RETURNING *",
    [deck_id]
  );
  res.status(200).json("Deck deleted successfully");
});
