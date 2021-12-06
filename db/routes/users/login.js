const express = require('express');
const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client('674943299698-dveacesg9g1fsicurdgab7ibnmngvv68.apps.googleusercontent.com')

const db = require('../../index');

const userLoginRouter = express.Router();

userLoginRouter.get('/', (req, res) => {
  db.query(`SELECT balance FROM gs_user_accounts where (gs_user_id = '1')`, function(err, rows) {
    if (err) throw err;

    res.send(rows)
  })
})

userLoginRouter.post('/', (req, res) => {
  const googleAuth = async (token) => {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: '674943299698-dveacesg9g1fsicurdgab7ibnmngvv68.apps.googleusercontent.com',
    });
    return ticket.getPayload();
  };

  googleAuth(req.body.tokenId)
    .then((payload) => {
      insertUser(payload)
        .then((dbData) => {
          res.status(200);
          req.session.userId = dbData.rows[0].userid;
          res.send(dbData);
        })
        .catch((err) => {
          console.log(err);
          res.status(500).send(err);
        });
    });
});

module.exports = userLoginRouter;