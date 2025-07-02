const express = require("express");
const router = express.Router();

// This is where we import the controllers we will route
const tripsController = require("../controllers/trips");
const authController = require("../controllers/authentication");
const { authenticate } = require("passport");

router.route("/register").post(authController.register);
router.route("/login").post(authController.login);

//define route for our trips endpoint
router
    .route("/trips")
    .get(tripsController.tripsList) // GET method routes tripList
    .post(authenticateJWT, tripsController.tripsAddtrip);

//GET method routes tripsFindByCode - requires parameter
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(authenticateJWT, tripsController.tripsUpdateTrip);

// define route for login endpoint
router
    .route('/login')
    .post(authController.login);

module.exports = router;