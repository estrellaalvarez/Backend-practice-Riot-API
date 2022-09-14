// Init .env vars
require("dotenv").config();

const { PORT, api_key } = process.env;
// const PORT = process.env.PORT
// const MONGODB_URI = process.env.MONGODB_URI

const express = require("express");
const app = express();



app.use(express.json()); //parse json


fetch(`https://ap.api.riotgames.com/val/content/v1/contents?api_key=${api_key}`)
.then((response) => response.json())
.then((data) => console.log(data));



app.get("/", (req, res) => {
    res.send("Hello world");
})


app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})