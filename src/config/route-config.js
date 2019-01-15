module.exports = {
  init(app) {
    const staticRoutes = require("../routes/static");
    const userRoutes = require("../routes/user");
    const eventRoutes = require("../routes/events");
    const chargeRoutes = require("../routes/charges");

    app.use(staticRoutes);
    app.use(userRoutes);
    app.use(eventRoutes);
    app.use(chargeRoutes);
  }
};
