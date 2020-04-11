'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async query(userId) {
    console.log('query 被执行了');
    const user = await this.ctx.db.query('select * from sys_user where uid = ?', userId);
    console.log(user);
    return user;
  }
}

module.exports = UserService;
