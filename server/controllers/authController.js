var db = require("../dbConnection");
const bcrypt = require("bcrypt");
module.exports = {
  login: (req, res) => {
    try {
      db.query(
        "SELECT u.id, u.firstname, u.lastname, u.login, u.password, r.role FROM users u JOIN role r ON r.id=u.role WHERE u.login=?",
        req.body.login,
        (error, rows) => {
          if (error) {
            console.log(error);
          } else {
            if (rows.length == 0) {
              res.send("Invalid data");
            } else {
              console.log(rows);
              bcrypt.compare(
                req.body.password,
                rows[0].password,
                (err, valid) => {
                  if (err) {
                    console.log(err.message);
                  } else {
                    if (valid) {
                      console.log("Logged as:" + req.body.login);
                      let current_user = {
                        id: rows[0].id,
                        firstname: rows[0].firstname,
                        lastname: rows[0].lastname,
                        login: rows[0].login,
                        role: rows[0].role
                      };
                      res.send(current_user);
                    } else res.send("Invalid data");
                  }
                }
              );
            }
          }
        }
      );
    } catch (error) {
      console.log("error" + error);
      res.status(400).send();
    }
  }
};
