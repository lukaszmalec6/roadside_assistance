const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const crypto = require("crypto");
var bodyParser = require("body-parser");
var multer = require("multer");
var upload = multer();
router.use(bodyParser.json());

/**---------------------------------------------------------------------------------
 *        check database connection
    --------------------------------------------------------------------------------*/

var db = require("./dbConnection");
db.connect(function(error) {
  if (!!error) {
    console.log("error: " + error.message);
  } else {
    console.log("Connected to DB");
  }
});
router.get("/", (req, res) => {
  res.send("api works");
});
/**---------------------------------------------------------------------------------
 *         API ENDPOINTS - DRIVERS
    --------------------------------------------------------------------------------*/
const driversCtrl = require("./controllers/driversController");
router.post("/drivers", driversCtrl.addDriver);
router.put("/drivers/:id", driversCtrl.updateDriver);
router.get("/drivers", driversCtrl.getDrivers);
router.get("/drivers/:id", driversCtrl.getDriverByID);
router.get("/drivers/:id/cars", driversCtrl.getDriversCars);
router.delete("/drivers/:id", driversCtrl.deleteDriver);
/**---------------------------------------------------------------------------------
 *         API ENDPOINTS - CARS
    --------------------------------------------------------------------------------*/
const carsCtrl = require("./controllers/carsController");
router.post("/cars", carsCtrl.addCar);
router.put("/cars/:id", carsCtrl.updateCar);
router.get("/cars", carsCtrl.getCars);
router.get("/cars/:id", carsCtrl.getCarByID);
router.delete("/cars/:id", carsCtrl.deleteCar);
/**---------------------------------------------------------------------------------
 *         API ENDPOINTS - INCIDENTS
    --------------------------------------------------------------------------------*/
const incidentsCtrl = require("./controllers/incidentsController");
router.post("/incidents", incidentsCtrl.addIncident);
router.put("/incidents/:id", incidentsCtrl.setAsProcessed);
router.get("/incidents", incidentsCtrl.getIncidents);
router.get("/incidents/:id", incidentsCtrl.getIncidentByID);
router.delete("/incidents/:id", incidentsCtrl.deleteIncident);
/**---------------------------------------------------------------------------------
 *         LOGIN
    --------------------------------------------------------------------------------*/
const authCtrl = require("./controllers/authController");
router.post("/login", authCtrl.login);
module.exports = router;
