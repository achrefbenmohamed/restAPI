const express = require('express')  // import express

const ConnectDB = require('./Config/ConnectDB')
const UserRouter = require('./Routes/UserRouter')

const app = express()  // utiliser express

require('dotenv').config() // utiliser dotenv

ConnectDB() //connecter Data base

app.use(express.json()) // utiliser Json

app.use('/api/user', UserRouter)  // path Server


app.listen(process.env.port, console.log(`server runnning on ${process.env.port}`)) // ecouter sur le port 5000