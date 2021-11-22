const express = require('express');
const db = require('../db/index.js');
const bodyParser = require('body-parser')
const cors=require('cors');
const corsOptions ={
   origin:'*',
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

const PORT = 3001;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors(corsOptions))

app.get('/', (req, res) => {
  res.send('hi')
})

app.get('/users', (req, res) => {
  db.query(`SELECT * FROM gs_users`, function(err, rows) {
    if (err) throw err;

    res.send(rows)
  })
})

app.post('/users', (req, res) => {
  db.save([req.body.email_address, req.body.first_name, req.body.last_name, req.body.date_of_birth, req.body.username], function(err, results) {
    console.log('saved')
  })
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});