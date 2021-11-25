const express = require('express');

const db = require('../../index.js')

const usersRouter = express.Router();
const userLoginRouter = require('./login')

usersRouter.get('/', (req, res) => {
  db.query(`SELECT * FROM gs_users`, function(err, rows) {
    if (err) throw err;

    res.send(rows)
  })
})

usersRouter.post('/', (req, res) => {
  db.saveUser([req.body.email_address, req.body.first_name, req.body.last_name, req.body.date_of_birth, req.body.username], function(err, results) {
    console.log('user saved')
  })
  console.log(req.body.username)
  db.makeUserAccount([req.body.username], function(err, results) {
    console.log('account created')
  })
  console.log('here')
})


usersRouter.use('/login', userLoginRouter);

module.exports = usersRouter;