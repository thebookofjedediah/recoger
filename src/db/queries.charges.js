const Charge = require("./models").Charge;

module.exports = {
  getAllCharges(callback) {
    return Charge.findAll()
      .then(charges => {
        callback(null, charges);
      })
      .catch(err => {
        callback(err);
      });
  },
  getCharge(callback) {
    return Charge.findById(id)
      .then(charge => {
        callback(null, charge);
      })
      .catch(err => {
        callback(err);
      });
  },
  addCharge(newCharge, callback) {
    return Charge.create({
      title: newCharge.title,
      description: newCharge.description,
      amount: newCharge.amount,
      userId: newCharge.userId,
      eventId: newCharge.eventId
    })
      .then(charge => {
        callback(null, charge);
      })
      .catch(err => {
        callback(err);
      });
  }
};
