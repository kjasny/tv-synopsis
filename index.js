const express = require('express')
const app = express()
const showdata = require('./showdata')

app.set('view engine', 'pug')

app.use(express.static('public'))

app.get('/', (req, res) => {
  return res.render('index', { showdata })
})

app.get('/seasons/:number', (req, res) => {
  const number = parseInt(req.params.number)
  const { seasons } = showdata
  const foundSeason = seasons.find((season) => { return season.number === number })

  return res.render('seasons', { showdata, foundSeason })
})

app.all('*', (req, res) => {
  return res.sendStatus(404)
})

app.listen(8080, () => {
  console.log('Listening on http://localhost:8080')
})
