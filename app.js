var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');
var mongoose = require('mongoose');

var app = express();
const port = 3000;
//Connect to mongoDB
mongoose.connect('mongodb://localhost:27017/namelist');
//On Connection
mongoose.connection.on('connected',()=>{
    console.log("Connected to DB at 27017");
});
//On Error
mongoose.connection.on('error',(err)=>{
    if(err){
        console.log("Error in DB connection "+err);
    }
});
//cors
app.use(cors());
//bodyparser JSON
app.use(bodyParser.json());
//route
const route = require('./routes/route')
app.use('/api',route)
//testing Server
app.get('/',(req,res)=>{
    res.send('vanako');
});
app.listen(port,()=>{
    console.log("Server started at localhost://3000");
});