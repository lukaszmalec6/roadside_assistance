const express = require("express");
const router = express.Router();
const mysql = require("mysql");
var bodyParser = require("body-parser");
var multer = require("multer");
var upload = multer();
router.use(bodyParser.json());

/**---------------------------------------------------------------------------------
 *         Database connection
    --------------------------------------------------------------------------------*/

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "roadside_assistance"
});

db.connect(function(error) {
  if (!!error) {
    console.log("error: " + error.message);
  } else {
    console.log("Connected to DB");
  }
});

/**---------------------------------------------------------------------------------
 *         API ENDPOINTS
    --------------------------------------------------------------------------------*/

router.get("/", (req, res) => {
  res.send("api works");
});
router.get("/drivers", (req, res) => {
  db.query("SELECT * FROM drivers", (err, rows) => {
    if (err) {
      console.log(err.message);
    } else {
      res.send(rows);
    }
  });
});
module.exports = router;
