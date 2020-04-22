'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('payment', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    houseId: INTEGER,
    rentId: INTEGER,
    houseOwnerId: INTEGER,
    money: INTEGER,
    isPay: INTEGER,
    deposit: INTEGER,
    crtTm: DATE,
    crtBy: STRING,
    updTm: DATE,
    updBy: STRING,
    editFlag: STRING,
  }, {
    freezeTableName: true,
    tableName: 'payment',
    timestamps: false,
  });

  return User;
};
