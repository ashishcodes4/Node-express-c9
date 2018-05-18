const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render('home');
});

app.listen("8080", () => {
    console.log("server listening on port 8080");
});