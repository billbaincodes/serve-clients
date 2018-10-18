const express = require('express')
const app = express()
const port = 3333
const cohorts = require('./cohorts.js')


app.get('/', (req, res, next) => {
  res.send(cohorts)
})

app.get('/w', (req, res, next) => {
  res.send('w')
})


app.get('/:index', (req, res, next) => {
  res.send(cohorts[req.params.index-1])
})


app.listen(port, () => {
  console.log(`I'm up on ye old port ${port}`)
})