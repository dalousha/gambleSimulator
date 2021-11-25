const express = require('express');
const db = require('../db/index.js');
const bodyParser = require('body-parser')

const cors=require('cors');
const corsOptions ={
   origin: '*',
   credentials: true,            //access-control-allow-credentials:true
   optionSuccessStatus: 200,
}

const PORT = 3001;

const app = express();

const users = require('../db/routes/users');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors(corsOptions))

app.get('/', (req, res) => {
  res.send('hi')
})

app.use('/users', users);



app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});