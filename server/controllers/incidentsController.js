var db = require("../dbConnection");
const crypto = require("crypto");
module.exports = {
  addIncident: (req, res) => {
    console.log("accident");
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
  },
  getIncidents: (req, res) => {
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
  },
  getLiveIncidents: (req, res) => {
    db.query(
      "SELECT drivers.firstname, drivers.secondname, cars.brand, cars.type, incidents.date, incidents.processed FROM incidents JOIN cars ON incidents.car=cars.id JOIN drivers ON cars.owner = drivers.id",
      (err, rows) => {
        if (err) {
          console.log(err.message);
          res.status(400).send("Incident fetching failed.");
        } else {
          res.send([
            rows[rows.length - 1],
            rows[rows.length - 2],
            rows[rows.length - 3]
          ]);
        }
      }
    );
  },
  getIncidentByID: (req, res) => {
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
  },
  setAsProcessed: (req, res) => {
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
  },
  deleteIncident: (req, res) => {
    db.query("DELETE FROM incidents WHERE id=?", [req.params.id], err => {
      if (err) {
        console.log(err.message);
        res.status(400).send("Deleting failed.");
      } else {
        res.send("Successfully deleted");
      }
    });
  }
};
