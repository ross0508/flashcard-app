const PORT = 8080;
const cors = require("cors");

const express = require("express");
app = express();
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log("Running on localhost:" + PORT);
});

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
});
