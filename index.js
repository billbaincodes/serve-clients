const express = require('express')
const app = express()
const port = 3333

app.get('/', (req, res, next) => {
  res.send('heyo🍄')
})

app.listen(port, () => {
  console.log(`I'm up on ye old port ${port}`)
})