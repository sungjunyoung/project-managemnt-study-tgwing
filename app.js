const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile("public/html/example.html", {root: __dirname})
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});