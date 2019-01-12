"use strict";
module.exports = (sequelize, DataTypes) => {
  var Event = sequelize.define(
    "Event",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {}
  );
  Event.associate = function(models) {
    // associations can be defined here
    Event.belongsTo(models.User, {
      foreignKey: "userId",
      onDelete: "CASCADE"
    });

    Event.hasMany(models.Charge, {
      foreignKey: "eventId",
      as: "charges"
    });
  };
  return Event;
};
