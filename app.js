const express = require('express')
const app = express()
const routes = require('./routes')
const port = 5678;

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use('/', routes)

app.listen(port, ()=>{
  console.log(`http://localhost:${port}`)
})