const chargeQueries = require("../db/queries.charges.js");

module.exports = {
  index(req, res, next) {
    chargeQueries.getAllCharges((err, events) => {
      if (err) {
        res.status(500).json(err.message);
      } else {
        res.json({ charges: charges });
      }
    });
  },
  create(req, res, next) {
    let newCharge = {
      title: req.body.title,
      description: req.body.description,
      amount: req.body.amount,
      userId: req.body.userId,
      eventId: req.body.eventId
    };
    chargeQueries.addCharge(newCharge, (err, charge) => {
      if (err) {
        res.status(500).json(err.errors[0].message);
      } else {
        res.json({
          title: charge.title,
          description: charge.description,
          amount: charge.amount
        });
      }
    });
  }
};
