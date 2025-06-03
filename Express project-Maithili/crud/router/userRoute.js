const express = require("express");
const router = express.Router();
const {
  getRegister,
  postRegister,
  getLogin,
  postLogin,
  logout,
} = require("../controller/userController");
const { ensureAuth, forwardAuth } = require("../middleware/userMiddleware");

router.get("/register", forwardAuth, getRegister);
router.post("/register", forwardAuth, postRegister);

router.get("/login", forwardAuth, getLogin);
router.post("/login", forwardAuth, postLogin);

router.get("/logout", ensureAuth, logout);

module.exports = router;
