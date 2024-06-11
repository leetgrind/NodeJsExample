const express = require('express')
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./controller/userController');
dotenv.config();

const dbConnectionString = process.env.DATABASE_URL

mongoose.connect(dbConnectionString);

const database = mongoose.connection;

database.on('error', (err) => {
    console.log(err);
});

database.once('connected', () => {
    console.log("Database connected");
})

const app = express();
const port = process.env.PORT;

app.use("/media", express.static("public"))

app.use("/users", userRoutes);

app.get("/", (req, res) => {
    res.send("hello")
});

app.get("/json", (req, res) => {
    res.json({"main": "def"});
})

app.get("/json2", (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({user: "hello"}));
});


app.listen(port, () => console.log(`Server started at port ${port}`));