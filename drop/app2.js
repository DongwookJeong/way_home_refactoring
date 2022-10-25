const express = require('express')
const app = express()
const path = require('path')
const conn = require("../keyDB/key")
// const routes = require("./routes")
const port = 8888

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname + "/public"))
app.use(express.static(__filename + "/img"))
// const header = require("./template/headerHTML")
const mainPage = require('./routes2/mainHTML')
app.use('/', mainPage)
// app.use('/', header)

app.listen(port, ()=>{
  console.log(`http://localhost:${port}`)
})