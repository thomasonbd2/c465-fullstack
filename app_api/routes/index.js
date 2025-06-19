const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');

// Controllers
const tripsController = require("../controllers/trips");
const authController = require("../controllers/authentication");

// Register route
router.route('/register').post(authController.register);

// Login route
router.route('/login').post(authController.login);

// JWT auth middleware
function authenticateJWT(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    console.log('Auth Header Required but NOT PRESENT!');
    return res.sendStatus(401);
  }

  const parts = authHeader.split(' ');
  if (parts.length < 2) {
    console.log('Invalid Auth Header format');
    return res.sendStatus(401);
  }

  const token = parts[1];
  jwt.verify(token, process.env.JWT_SECRET, (err, verified) => {
    if (err) {
      console.log('Token validation error');
      return res.status(401).json({ message: 'Token validation error' });
    }
    req.auth = verified;
    next();
  });
}

// Trips routes
router.route('/trips')
  .get(tripsController.tripsList)
  .post(authenticateJWT, tripsController.tripsAddTrip);

router.route('/trips/:tripCode')
  .get(tripsController.tripsFindByCode)
  .put(authenticateJWT, tripsController.tripsUpdateTrip);

module.exports = router;
