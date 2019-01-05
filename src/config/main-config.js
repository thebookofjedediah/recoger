const bodyParser = require("body-parser");
require("dotenv").config();

module.exports = {
  init(app, express) {
    app.use(bodyParser.json());
  }
};
