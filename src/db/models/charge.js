"use strict";
module.exports = (sequelize, DataTypes) => {
  var Charge = sequelize.define(
    "Charge",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      eventId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {}
  );
  Charge.associate = function(models) {
    Charge.belongsTo(models.Event, {
      foreignKey: "eventId",
      onDelete: "CASCADE"
    });

    Charge.belongsTo(models.User, {
      foreignKey: "userId",
      onDelete: "CASCADE"
    });
  };
  return Charge;
};
