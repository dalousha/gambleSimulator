const express = require('express');
const db = require('../db/index.js');

const PORT = 3001;

const app = express();

app.get('/', (req, res) => {
  res.send('hi')
})

app.get('/users', (req, res) => {
  db.query(`SELECT * FROM users`, function(err, rows) {
    if (err) throw err;

    res.send(rows)
  })

})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});