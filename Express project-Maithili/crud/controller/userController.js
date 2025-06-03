const User = require("../model/userModel");
const bcrypt = require("bcrypt");

const getRegister = (req, res) => {
  res.render("register", { error: null });
};

const postRegister = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.render("register", { error: "All fields are required" });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.render("register", { error: "Invalid email format" });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.render("register", { error: "Email already registered" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.redirect("/login");
  } catch (err) {
    console.log(err);
    res.render("register", { error: "Something went wrong" });
  }
};

const getLogin = (req, res) => {
  res.render("login", { error: null });
};

const postLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.render("login", { error: "All fields are required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.render("login", { error: "Invalid email or password" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.render("login", { error: "Invalid email or password" });
    }
    req.session.userId = user._id;
    req.session.username = user.username;
    res.redirect("/");
  } catch (err) {
    console.log(err);
    res.render("login", { error: "Something went wrong" });
  }
};

const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    }
    res.redirect("/login");
  });
};

module.exports = { getRegister, postRegister, getLogin, postLogin, logout };
