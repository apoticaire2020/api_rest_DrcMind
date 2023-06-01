
const express = require('express');

const app = express();
app.get('/',  ( req, res ) =>{ res.json({ message : 'Hello'})}) 
const port = 5000;

app.listen(port);



