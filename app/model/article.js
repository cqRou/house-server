'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('article', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    content: STRING,
    crtTm: DATE,
    crtBy: STRING,
    updTm: DATE,
    updBy: STRING,
    editFlag: STRING,
  }, {
    freezeTableName: true,
    tableName: 'article',
    timestamps: false,
  });

  return User;
};
