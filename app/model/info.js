'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const info = app.model.define('info', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    rentId: INTEGER,
    rentName: STRING,
    houseOwnerId: INTEGER,
    houseOwnerName: STRING,
    msg: STRING,
    isSentPhone: INTEGER,
    isMakeContract: INTEGER,
    houseId: INTEGER,
    houseName:STRING,
    crtTm: DATE,
    crtBy: STRING,
    updTm: DATE,
    updBy: STRING,
    editFlag: STRING,
  }, {
    freezeTableName: true,
    tableName: 'info',
    timestamps: false,
  });

  return info;
};
