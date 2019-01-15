const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:5000/charges/";
const Charge = require("../../src/db/models").Charge;
const sequelize = require("../../src/db/models/index").sequelize;

describe("routes : charges", () => {
  beforeEach(done => {
    this.charge;
    sequelize.sync({ force: true }).then(res => {
      Charge.create({
        title: "Flight",
        description: "the way overseas"
      })
        .then(charge => {
          this.charge = charge;
          done();
        })
        .catch(err => {
          console.log(err);
          done();
        });
    });
  });
});
