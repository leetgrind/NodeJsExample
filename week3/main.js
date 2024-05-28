const express = require('express')

const app = express();
const port = 3000;

app.use("/media", express.static("public"))


app.get("/", (req, res) => {
    res.send("hello")
});


app.listen(port, () => console.log("Server started at port 3000"));