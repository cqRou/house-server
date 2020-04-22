'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('rolePermission', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    roleId: INTEGER,
    permissionId: INTEGER,
    crtTm: DATE,
    crtBy: STRING,
    updTm: DATE,
    updBy: STRING,
    editFlag: STRING,
  }, {
    freezeTableName: true,
    tableName: 'sys_role_permission',
    timestamps: false,
  });

  return User;
};
