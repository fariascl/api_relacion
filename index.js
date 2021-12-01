'use strict'
const express = require('express')
const app = express()

var auto_route = require('./routes/autoRoute');
var marca_route = require('./routes/marcaRoute');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/api', auto_route);
app.use('/api', marca_route);

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    autoIndex: true, //this is the code I added that solved it all
    keepAlive: true,
    poolSize: 10,
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000,
    socketTimeoutMS: 45000,
    family: 4, // Use IPv4, skip trying IPv6
    useFindAndModify: false,
    useUnifiedTopology: true
}

mongoose.connect(`mongodb://localhost:27017/grupo18?security=false`, options)
.then(() => console.log('> Successfully connected to DB'))
  .catch(err => console.log(err))  

    app.listen(4000, () => {

        console.log("Esta corriendo en puerto 4000")
    })