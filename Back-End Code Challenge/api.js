require("dotenv").config();
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const client = require('./connection');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())


app.listen(3300, ()=>{
    console.log('Server is now listening at port 3300')
})

client.connect();


app.get('/show?network_id=:id', (req, res)=> {
    
})