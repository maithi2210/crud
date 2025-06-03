const express = require("express");
const path = require("path");
const session = require("express-session");
const mongoose = require("mongoose");

const empRoute = require("./router/empRoute");
const userRoute = require("./router/userRoute");

const app = express();

mongoose
  .connect("mongodb://localhost:27017/db12")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
  session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: false,
  })
);
app.use((req, res, next) => {
  res.locals.username = req.session.username || null;
  next();
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", userRoute);
app.use("/", empRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
