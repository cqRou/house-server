'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('contract', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    houseId: INTEGER,
    rentId: INTEGER,
    houseOwnerId: INTEGER,
    rentTime: STRING,
    startTime: DATE,
    endTime: DATE,
    crtTm: DATE,
    crtBy: STRING,
    updTm: DATE,
    updBy: STRING,
    editFlag: STRING,
  }, {
    freezeTableName: true,
    tableName: 'contract',
    timestamps: false,
  });

  return User;
};
