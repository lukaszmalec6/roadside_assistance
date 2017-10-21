const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const crypto = require("crypto");
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
router.post("/drivers", (req, res) => {
  var pass = crypto.createHmac("sha256", req.body.password).digest("hex");
  db.query(
    "INSERT INTO drivers values (null,?,?,?,?)",
    [req.body.firstname, req.body.secondname, req.body.login, pass],
    err => {
      if (err) {
        console.log(err.message);
        res.status(400).send("Driver registration failed.");
      } else {
        res.send("Driver has been registered.");
      }
    }
  );
});
router.get("/drivers", (req, res) => {
  db.query(
    "SELECT drivers.firstname, drivers.secondname FROM drivers",
    (err, rows) => {
      if (err) {
        console.log(err.message);
        res.status(400).send("Drivers fetching failed.");
      } else {
        res.send(rows);
      }
    }
  );
});
router.get("/drivers/:id", (req, res) => {
  db.query(
    "SELECT drivers.firstname, drivers.secondname FROM drivers WHERE drivers.id=?",
    [req.params.id],
    (err, rows) => {
      if (err) {
        console.log(err.message);
        res.status(400).send("Driver fetching failed.");
      } else {
        res.send(rows);
      }
    }
  );
});
router.get("/drivers/:id/cars", (req, res) => {
  db.query(
    "SELECT cars.brand, cars.type FROM drivers JOIN cars ON cars.owner=drivers.id WHERE drivers.id=?",
    [req.params.id],
    (err, rows) => {
      if (err) {
        console.log(err.message);
        res.status(400).send("Cars fetching failed.");
      } else {
        res.send(rows);
      }
    }
  );
});
router.get("/cars", (req, res) => {
  db.query(
    "SELECT cars.brand, cars.type, drivers.firstname, drivers.secondname FROM cars JOIN drivers ON cars.owner=drivers.id",
    (err, rows) => {
      if (err) {
        console.log(err.message);
        res.status(400).send("Cars fetching failed.");
      } else {
        res.send(rows);
      }
    }
  );
});
router.get("/cars/:id", (req, res) => {
  db.query(
    "SELECT cars.brand, cars.type, drivers.firstname, drivers.secondname FROM cars JOIN drivers ON cars.owner=drivers.id WHERE cars.id =?",
    [req.params.id],
    (err, rows) => {
      if (err) {
        console.log(err.message);
        res.status(400).send("Car fetching failed.");
      } else {
        res.send(rows);
      }
    }
  );
});
router.post("/cars", (req, res) => {
  db.query(
    "INSERT INTO cars values (null,?,?,?)",
    [req.body.brand, req.body.type, req.body.ownerid],
    err => {
      if (err) {
        console.log(err.message);
        res.status(400).send("Car registration failed.");
      } else {
        res.send("Your car has been registered.");
      }
    }
  );
});

router.post("/incidents", (req, res) => {
  db.query(
    "INSERT INTO incidents values (null,?,?,?)",
    [new Date(), 0, req.body.car],
    err => {
      if (err) {
        console.log(err.message);
        res.status(400).send("Incident registration failed.");
      } else {
        res.send("Your accident has been registered.");
      }
    }
  );
});

router.get("/incidents", (req, res) => {
  db.query(
    "SELECT drivers.firstname, drivers.secondname, cars.brand, cars.type, incidents.date, incidents.processed FROM incidents JOIN cars ON incidents.car=cars.id JOIN drivers ON cars.owner = drivers.id",
    (err, rows) => {
      if (err) {
        console.log(err.message);
        res.status(400).send("Incident fetching failed.");
      } else {
        res.send(rows);
      }
    }
  );
});

router.put("/incidents/:id", (req, res) => {
  db.query(
    "UPDATE incidents SET processed = 1 WHERE incidents.id=?",
    [req.params.id],
    (err, rows) => {
      if (err) {
        console.log(err.message);
        res.status(400).send("Status updating failed");
      } else {
        res.send("Incident has been marked as processed");
      }
    }
  );
});

router.get("/incidents/:id", (req, res) => {
  db.query(
    "SELECT drivers.firstname, drivers.secondname, cars.brand, cars.type, incidents.date, incidents.processed FROM incidents JOIN cars ON incidents.car=cars.id JOIN drivers ON cars.owner = drivers.id WHERE incidents.id=?",
    [req.params.id],
    (err, rows) => {
      if (err) {
        console.log(err.message);
        res.status(400).send("Incidents fetching failed.");
      } else {
        res.send(rows);
      }
    }
  );
});
/**---------------------------------------------------------------------------------
 *         LOGIN
    --------------------------------------------------------------------------------*/
router.post("/login", (req, res) => {
  console.log(req.body);
  var pass = crypto.createHmac("sha256", req.body.password).digest("hex");
  db.query(
    "SELECT administrators.login, administrators.password FROM administrators WHERE login=? AND password=?",
    [req.body.login, pass],
    (err, rows) => {
      if (err) {
        console.log(err.message);
      } else if (rows.length == 0) {
        console.log("Login failed. Invalid login or password");
        res.status(400).send("Login failed. Invalid login or password");
      } else {
        console.log("Welcome, " + rows[0].login);
        res.send("Welcome, " + rows[0].login);
      }
    }
  );
});

module.exports = router;
