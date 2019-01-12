const eventQueries = require("../db/queries.events.js");

module.exports = {
  index(req, res, next) {
    eventQueries.getAllEvents((err, events) => {
      if (err) {
        res.status(500).json(err.message);
      } else {
        res.json({ event: event.title });
      }
    });
  },
  create(req, res, next) {
    let newEvent = {
      title: req.body.title,
      description: req.body.description
    };
    eventQueries.addEvent(newEvent, (err, event) => {
      if (err) {
        res.redirect(500, "/events/new");
      } else {
        res.redirect(303, `/events/${event.id}`);
      }
    });
  },
  show(req, res, next) {
    eventQueries.getEvent(req.params.id, (err, topic) => {
      if (err || topic == null) {
        res.redirect(404, "/");
      } else {
        res.render("events/show", { event });
      }
    });
  },
  destroy(req, res, next) {
    eventQueries.deleteEvent(req.params.id, (err, event) => {
      if (err) {
        res.redirect(500, `/events/${event.id}`);
      } else {
        res.redirect(303, "/events");
      }
    });
  },
  edit(req, res, next) {
    eventQueries.getEvent(req.params.id, (err, event) => {
      if (err || event == null) {
        res.redirect(404, "/");
      } else {
        res.render("events/edit", { event });
      }
    });
  },
  update(req, res, next) {
    eventQueries.updateEvent(req.params.id, req.body, (err, events) => {
      if (err || topic == null) {
        res.redirect(404, `/events/${req.params.id}/edit`);
      } else {
        res.redirect(`/events/${event.id}`);
      }
    });
  }
};
