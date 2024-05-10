const express = require("express");
const {
  registerController,
  loginController,
  logoutController,
} = require("../controllers/authControllers");

//routes objects
const router = express.Router();

//routes
//Register
router.post("/register", registerController);

//login
router.post("/login", loginController);

//Logout
router.post("/logout", logoutController);

module.exports = router;
