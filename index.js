const express = require('express')
const app = express()
const port = 3333
const cohorts = require('./cohorts.js')
const error = require('./error.js')


app.get('/', (req, res, next) => {
  res.send('🤖 🤠')
})

app.get('/:index', (req, res, next) => {
  if (req.params.index <= cohorts.length) {
    res.send(cohorts[req.params.index-1])
  }
  else {
    res.status(404)
    res.send(error)
  }
})


app.listen(port, () => {
  console.log(`I'm up on ye old port ${port}`)
})