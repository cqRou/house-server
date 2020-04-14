
'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('user', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    username: STRING,
    password: STRING,
    address: STRING,
    roleId: STRING,
    crtTm: DATE,
    roleId: STRING,
    editFlag: INTEGER,
  }, {
    freezeTableName: true,
    tableName: 'sys_user',
    timestamps: false,
  });

  return User;
};
