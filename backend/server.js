const express = require("express");
const cors = require("cors")
const fetch = require("node-fetch");
// require("dotenv").config()

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(cors())
app.use("/api", express.static("../client/public")).listen(PORT, "0.0.0.0", "localhost", () => console.log(`Listening on ${ PORT }`));


fetchPokemons = async () => {
  const pokemons = await fetch("https://pokedex-99700-default-rtdb.firebaseio.com/pokemons/-MaPPwo7Ekb4qLDLo8h_.json")
  .then(res => res.json())
  .catch((error => {
    console.error("Error: " + error)
  }))

  return pokemons
}

fetchPokemons()
  .then(pokemons => {
    app.get("/", (req, res) => {
      res.send(pokemons);
    });
  })


// app.get("/api", (req, res) => {
//   res.sendFile("../client/public");
// });

  

