'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('permission', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    menuCode: STRING,
    menuName: STRING,
    permissionCode: STRING,
    permissionName: STRING,
    requiredPermission: INTEGER,
    crtTm: DATE,
    crtBy: STRING,
    updTm: DATE,
    updBy: STRING,
    editFlag: STRING,
  }, {
    freezeTableName: true,
    tableName: 'sys_permission',
    timestamps: false,
  });

  return User;
};
