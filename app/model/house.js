'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const House = app.model.define('house', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    houseName: STRING,
    city: STRING,
    district: STRING,
    street: STRING,
    area: STRING,
    houseType: STRING,
    orientation: STRING,
    payment: INTEGER,
    subway: STRING,
    rentType: INTEGER,
    isRent: INTEGER,
    houseAge: INTEGER,
    crtTm: DATE,
    crtBy: STRING,
    updTm: DATE,
    updBy: STRING,
    editFlag: STRING,
  }, {
    freezeTableName: true,
    tableName: 'house',
    timestamps: false,
  });

  return House;
};
