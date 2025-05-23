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

<<<<<<< HEAD
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
  res.status(200).json("Deck created successfully");
});

app.put("/decks/:deckId", async (req, res) => {
  res.send("test update deck");
});

app.delete("/decks/:deckId", async (req, res) => {
  const { deckId } = req.params;
  const deck = await pool.query(
    "DELETE FROM decks WHERE deck_id = ($1) RETURNING *",
    [deckId]
  );
  res.status(200).json("Deck deleted successfully");
=======
app.get("/decks", (req, res) => {
  res.send("test get decks");
});

app.post("/decks", (req, res) => {
  res.send("test add deck");
});

app.put("/decks/:deckId", (req, res) => {
  res.send("test update deck");
});

app.delete("/decks/:deckId", (req, res) => {
  res.send("test remove deck");
>>>>>>> 2d9c2e2ab8fa91c068995a33e593746344de3fef
});
