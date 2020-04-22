'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('route', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    start: STRING,
    end: STRING,
    lookPoints: STRING,
    lookType: INTEGER,
    crtTm: DATE,
    crtBy: STRING,
    updTm: DATE,
    updBy: STRING,
    editFlag: STRING,
  }, {
    freezeTableName: true,
    tableName: 'route',
    timestamps: false,
  });

  return User;
};
