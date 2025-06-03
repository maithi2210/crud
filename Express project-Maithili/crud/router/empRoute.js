const express = require("express");
const router = express.Router();

const {
  getEmployees,
  addEmployee,
  getEditEmployee,
  updateEmployee,
  deleteEmployee,
  getAddEmployee,
} = require("../controller/empController");

const { ensureAuth } = require("../middleware/userMiddleware");

router.get("/", ensureAuth, getEmployees);
router.get("/add", ensureAuth, getAddEmployee);
router.post("/add", ensureAuth, addEmployee);
router.get("/edit/:id", ensureAuth, getEditEmployee);
router.post("/edit/:id", ensureAuth, updateEmployee);
router.post("/delete/:id", ensureAuth, deleteEmployee);

module.exports = router;
