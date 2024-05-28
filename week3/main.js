const express = require('express')

const app = express();
const port = 3000;

app.use("/media", express.static("public"))

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


app.listen(port, () => console.log("Server started at port 3000"));