'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async query(userId) {
    console.log('query 被执行了');
    const { ctx } = this;
    const user = await ctx.model.User.findByPk(userId);
    console.log(user);
    return user;
  }
}

module.exports = UserService;
