'use strict';

const express = require('express')
const bodyParser = require('body-parser')
const PORT = 3000
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

const routes = require('./routes/routes.js')(app)
const server = app.listen(PORT, () => {
    console.log('Listening on port %s', server.address().port)
})