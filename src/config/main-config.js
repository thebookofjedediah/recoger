require("dotenv").config();

module.exports = {
  init(app, express) {
    app.set("views");
    app.set("view engine", "react");
  }
};
