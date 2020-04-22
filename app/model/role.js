'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('role', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    roleName: STRING,
    crtTm: DATE,
    crtBy: STRING,
    updTm: DATE,
    updBy: STRING,
    editFlag: STRING,
  }, {
    freezeTableName: true,
    tableName: 'sys_role',
    timestamps: false,
  });

  return User;
};
