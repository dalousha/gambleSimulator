var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "gamble_simulator"
})

var saveUser = function(params, callback) {
  var queryStr = 'INSERT INTO gs_users (email_address, first_name, last_name, date_of_birth, username) values (?, ?, ?, ?, ?)';
  con.query(queryStr, params, (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  });
}

var makeUserAccount = function(params, callback) {
  var queryStr = `INSERT INTO gs_user_accounts (gs_user_id, balance) VALUES ((SELECT id FROM gs_users WHERE username = ?), '100.00')`;
  con.query(queryStr, params, (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  });
}

con.connect(function(err) {
  if (err) throw err;
  console.log('connected')
});

module.exports = con;
module.exports.saveUser = saveUser;
module.exports.makeUserAccount = makeUserAccount;