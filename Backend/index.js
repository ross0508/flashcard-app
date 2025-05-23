const PORT = 8080;
const cors = require("cors");

const express = require("express");
app = express();
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log("Running on localhost:" + PORT);
});

app.get("/", (req, res) => {
  res.send("test");
});
