const express = require('express')
const app = express()
const port = 3333
const cohorts = require('./cohorts.js')
const error = require('./error.js')


app.get('/cohorts', (req, res, next) => {
  res.json(cohorts)
})

app.get('/cohorts/:id', (req, res, next) => {
    let chosenCohort = cohorts.filter(cohort => {
      return cohort.id == req.params.id
    })
    if (!chosenCohort.length) {
      next()
    }
    res.json({ cohort : chosenCohort[0] })
  })

app.use(notFound)
app.use(errorHandler)

function notFound(req, res, next) {
  res.status(404).send(error)
}

function errorHandler(err, req, res, next) {
  console.error('ERROR', err)
  const stack = process.env.NODE_ENV !== 'production' ? err.stack : undefined
  res.status(500).send({ error: err.message, stack, url: req.originalUrl })
}


app.listen(port, () => {
  console.log(`I'm up on ye old port ${port}`)
})