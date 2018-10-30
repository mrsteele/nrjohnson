const express = require('express')

const app = express()

app.get('/', function (req, res) {
  res.send('you are here')
})

app.get('/test', function (req, res) {
  res.send('test endpoint')
})

app.get('/debug', function (req, res) {
  console.log('this works too!')
  res.send('check your console!')
})

app.listen(8080)
