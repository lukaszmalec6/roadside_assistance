var db = require("../dbConnection");

module.exports = {
  getDrivers: (req, res) => {
    db.query("SELECT * FROM drivers", (err, rows) => {
      if (err) {
        console.log(err.message);
        res.status(400).send("Drivers fetching failed.");
      } else {
        res.send(rows);
      }
    });
  },
  getDriverByID: (req, res) => {
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
  },
  getDriversCars: (req, res) => {
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
  },
  addDriver: (req, res) => {
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
  },
  updateDriver: (req, res) => {
    var pass = crypto.createHmac("sha256", req.body.password).digest("hex");
    db.query(
      "UPDATE  drivers SET firstname=?, secondname=?, login=?, password=? WHERE drivers.id=?",
      [
        req.body.firstname,
        req.body.secondname,
        req.body.login,
        pass,
        req.params.id
      ],
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
    db.query("DELETE FROM drivers WHERE id=?", [req.params.id], err => {
      if (err) {
        console.log(err.message);
        res.status(400).send("Deleting failed.");
      } else {
        res.send("Successfully deleted");
      }
    });
  }
};
