const Employee = require("../model/empModel");

const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.render("index", { employees, username: req.session.username });
  } catch (err) {
    console.log(err);
    res.send("Error loading employees");
  }
};
const getAddEmployee = (req, res) => {
  res.render("add", { username: req.session.username });
};

const addEmployee = async (req, res) => {
  try {
    const { name, email, age } = req.body;
    if (!name || !email || !age) {
      return res.send("All fields are required");
    }
    await Employee.create({ name, email, age });
    res.redirect("/");
  } catch (err) {
    console.log(err);
    res.send("Error adding employee");
  }
};

const getEditEmployee = async (req, res) => {
  try {
    const emp = await Employee.findById(req.params.id);
    if (!emp) {
      return res.send("Employee not found");
    }
    res.render("edit", { emp });
  } catch (err) {
    console.log(err);
    res.send("Error loading edit page");
  }
};

const updateEmployee = async (req, res) => {
  try {
    const { name, email, age } = req.body;
    await Employee.findByIdAndUpdate(req.params.id, { name, email, age });
    res.redirect("/");
  } catch (err) {
    console.log(err);
    res.send("Error updating employee");
  }
};

const deleteEmployee = async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.redirect("/");
  } catch (err) {
    console.log(err);
    res.send("Error deleting employee");
  }
};

module.exports = {
  getEmployees,
  addEmployee,
  getEditEmployee,
  updateEmployee,
  deleteEmployee,
  getAddEmployee,
};
