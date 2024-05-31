// required to import express
const express = require('express');
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
//Different ports lead to different pages
//The below request leads to the port https://...../abc
app.get('/abc', (req, res) => {
    res.send('Hello page 1');
});
//The request below leads to the port https://...../def
app.get('/def', (req, res) => {
    res.send('Hello page 2');
});
//The request below leads to the port https://....../ghi
app.get('/ghi', (req, res) => {
    res.send('Hello page 3');
});
//The rewuest below leads to the port https://......./jkl
app.get('/jkl', (req, res) => {
    res.send('Hello page 4');
});
//when the request is sent a response is given in return
app.listen(port, () => {
    console.log(`Your port request ${port}`);
    console.log('This port is where your request goes ${port}');
});
