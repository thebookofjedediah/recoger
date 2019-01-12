const userQueries = require("../db/queries.users.js");
const passport = require("passport");
const jwt = require("jsonwebtoken");

module.exports = {
  create(req, res, next) {
    let newUser = {
      email: req.body.email,
      password: req.body.password,
      passwordConfirmation: req.body.passwordConfirmation
    };
    userQueries.createUser(newUser, (err, user) => {
      if (err) {
        res.status(500).json(err.errors[0].message);
      } else {
        passport.authenticate("local")(req, res, () => {
          res.json({ id: user.id, email: user.email });
        });
      }
    });
  },
  signIn(req, res, next) {
    passport.authenticate("local")(req, res, function() {
      if (req.user) {
        req.flash("notice", "You've successfully signed in!");
        res.json({ id: req.user.id, email: req.user.email }); //this needs to return a token
      }
    });
  },
  signOut(req, res, next) {
    req.logout();
    req.flash("notice", "You've successfully signed out!");
    res.json({ success: true });
  }
};
