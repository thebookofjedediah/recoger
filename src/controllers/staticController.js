module.exports = {
  landing(req, res, next) {
    res.render("static/landing", { title: "Welcome to Recoger" });
  },
  about(req, res, next) {
    res.render("static/about", { title: "About Us" });
  }
};
