const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:5000/events/";
const Event = require("../../src/db/models").Event;
const sequelize = require("../../src/db/models/index").sequelize;

describe("routes : events", () => {
  beforeEach(done => {
    this.event;
    sequelize.sync({ force: true }).then(res => {
      Event.create({
        title: "TernBooking",
        description: "A trip to Taiwan"
      })
        .then(event => {
          this.event = event;
          done();
        })
        .catch(err => {
          console.log(err);
          done();
        });
    });
  });
});
