var db = require("../dbConnection");
const bcrypt = require("bcrypt");
module.exports = {
  getDrivers: (req, res) => {
    db.query(
      "SELECT u.id, u.firstname, u.lastname,u.login, r.role FROM users u JOIN role r ON u.role=r.id",
      (err, rows) => {
        if (err) {
          console.log(err.message);
          res.status(400).send("Drivers fetching failed.");
        } else {
          res.send(rows);
        }
      }
    );
  },
  getDriverByID: (req, res) => {
    db.query(
      "SELECT u.id, u.firstname, u.lastname, u.login, r.role FROM users u JOIN role r ON u.role=r.id WHERE u.id=?",
      [req.params.id],
      (err, rows) => {
        if (err) {
          console.log(err.message);
          res.status(400).send("Driver fetching failed.");
        } else {
          res.send(rows[0]);
        }
      }
    );
  },
  getDriversCars: (req, res) => {
    db.query(
      "SELECT cars.brand, cars.type FROM cars JOIN users ON cars.owner=users.id WHERE users.id=?",
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
  },
  addDriver: (req, res) => {
    var pass = bcrypt.hashSync(req.body.password, 10);
    db.query(
      "INSERT INTO users values (null,?,?,?,?,2)",
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
  },
  updateDriver: (req, res) => {
    db.query(
      "UPDATE  users SET firstname=?, lastname=?, login=? WHERE users.id=?",
      [req.body.firstname, req.body.lastname, req.body.login, req.params.id],
      err => {
        if (err) {
          console.log(err.message);
          res.status(400).send("Driver udpating failed.");
        } else {
          res.send("Driver has been updated.");
        }
      }
    );
  },
  deleteDriver: (req, res) => {
    db.query("DELETE FROM users WHERE id=?", [req.params.id], err => {
      if (err) {
        console.log(err.message);
        res.status(400).send("Deleting failed.");
      } else {
        res.send("Successfully deleted");
      }
    });
  }
};
