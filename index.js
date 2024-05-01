const express = require('express');
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.get('/abc', (req, res) => {
    res.send('Hello page 1');
});

app.get('/def', (req, res) => {
    res.send('Hello page 2');
});
app.get('/ghi', (req, res) => {
    res.send('Hello page 3');
});
app.get('/jkl', (req, res) => {
    res.send('Hello page 4');
});

app.listen(port, () => {
    console.log(`Your port request ${port}`);
    console.log('This port is where your request goes ${port}');
});
