const eventQueries = require("../db/queries.events.js");

module.exports = {
  index(req, res, next) {
    eventQueries.getAllEvents((err, events) => {
      if (err) {
        res.status(500).json(err.message);
      } else {
        res.json({ events: events });
      }
    });
  },
  create(req, res, next) {
    let newEvent = {
      title: req.body.title,
      description: req.body.description,
      userId: req.body.userId
    };
    eventQueries.addEvent(newEvent, (err, event) => {
      if (err) {
        res.status(500).json(err.errors[0].message);
      } else {
        res.json({ title: event.title, description: event.description });
      }
    });
  }
};
