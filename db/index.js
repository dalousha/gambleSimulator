var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "gamble_simulator"
})

con.connect(function(err) {
  if (err) throw err;
  var sql = "CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, email_address VARCHAR(255), first_name VARCHAR(255), last_name VARCHAR(255), date_of_birth DATE, username VARCHAR(255));";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});

module.exports = con;