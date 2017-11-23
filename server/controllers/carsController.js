var db = require("../dbConnection");
module.exports = {
  getCars: (req, res) => {
    db.query(
      "SELECT cars.id, cars.brand, cars.type, users.firstname AS ownerFirstname, users.lastname AS ownerLastname, users.id AS ownerID FROM cars JOIN users ON cars.owner=users.id",
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
  getCarByID: (req, res) => {
    db.query(
      "SELECT cars.id, cars.brand, cars.type, users.firstname AS ownerFirstname, users.lastname AS ownerLastname, users.id AS ownerID FROM cars JOIN users ON cars.owner=users.id WHERE cars.id =?",
      [req.params.id],
      (err, rows) => {
        if (err) {
          console.log(err.message);
          res.status(400).send("Car fetching failed.");
        } else {
          res.send(rows[0]);
        }
      }
    );
  },
  addCar: (req, res) => {
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
  },
  updateCar: (req, res) => {
    db.query(
      "UPDATE cars SET brand=?, type=?  WHERE cars.id=?",
      [req.body.brand, req.body.type, req.params.id],
      (err, rows) => {
        if (err) {
          console.log(err.message);
          res.status(400).send("Car updating failed");
        } else {
          res.send("Car has been updated");
        }
      }
    );
  },
  deleteCar: (req, res) => {
    db.query("DELETE FROM cars WHERE id=?", [req.params.id], err => {
      if (err) {
        console.log(err.message);
        res.status(400).send("Deleting failed.");
      } else {
        res.send("Successfully deleted");
      }
    });
  }
};
