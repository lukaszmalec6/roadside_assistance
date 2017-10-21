const mysql = require("mysql");
var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "roadside_assistance"
});

module.exports = db;
