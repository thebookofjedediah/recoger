const Event = require("./models").Event;
const Charge = require("./models").Charge;

module.exports = {
  getAllEvents(callback) {
    return Event.findAll()
      .then(events => {
        callback(null, events);
      })
      .catch(err => {
        callback(err);
      });
  },
  getEvent(id, callback) {
    return Event.findById(id, {
      include: [
        {
          model: Charge,
          as: "charges"
        }
      ]
    })
      .then(event => {
        callback(null, event);
      })
      .catch(err => {
        console.log("Error", err);
        callback(err);
      });
  },
  addEvent(newEvent, callback) {
    return Event.create({
      title: newEvent.title,
      description: newEvent.description,
      userId: newEvent.userId
    })
      .then(event => {
        callback(null, event);
      })
      .catch(err => {
        callback(err);
      });
  }
  //   deleteEvent(req, callback) {
  //     return Event.findById(req.params.id)
  //       .then(event => {
  //         topic.destroy().then(res => {
  //           callback(null, topic);
  //         });
  //       })
  //       .catch(err => {
  //         callback(err);
  //       });
  //   },
  //   updateEvent(req, updatedEvent, callback) {
  //     return Event.findById(req.params.id).then(event => {
  //       if (!event) {
  //         return callback("Event not found");
  //       }
  //       event
  //         .update(updatedEvent, {
  //           fields: Object.keys(updatedEvent)
  //         })
  //         .then(() => {
  //           callback(null, event);
  //         })
  //         .catch(err => {
  //           callback(err);
  //         });
  //     });
  //   }
};
