// Init .env vars
require("dotenv").config();

const { PORT } = process.env;
// const PORT = process.env.PORT
// const MONGODB_URI = process.env.MONGODB_URI

const express = require("express");
const app = express();



app.use(express.json()); //parse json



app.get("/", (req, res) => {
    res.send("Hello world");
})


app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})