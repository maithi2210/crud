function ensureAuth(req, res, next) {
  if (req.session.userId) {
    next();
  } else {
    res.redirect("/login");
  }
}

function forwardAuth(req, res, next) {
  if (!req.session.userId) {
    next();
  } else {
    res.redirect("/");
  }
}

module.exports = { ensureAuth, forwardAuth };
