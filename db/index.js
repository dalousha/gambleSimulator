var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "gamble_simulator"
})

var save = function(params, callback) {
  var queryStr = 'INSERT INTO gs_users (email_address, first_name, last_name, date_of_birth, username) values (?, ?, ?, ?, ?)';
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
  con.query("DROP TABLE gs_users", function(err, result) {
    if (err) throw err;
  })
  var sql = "CREATE TABLE gs_users (id INT AUTO_INCREMENT PRIMARY KEY, email_address VARCHAR(255), first_name VARCHAR(255), last_name VARCHAR(255), date_of_birth DATE, username VARCHAR(255));";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});

module.exports = con;
module.exports.save = save;