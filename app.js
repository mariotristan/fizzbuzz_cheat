const express = require('express')
const app = express()
const port = 3000
const path = require('path');

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/fizz', (req, res) => {
    res.sendFile(path.join(__dirname + '/fizz/test.html'));
  })
  

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})