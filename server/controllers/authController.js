var db = require("../dbConnection");

module.exports = {
  login: (req, res) => {
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
  }
};
