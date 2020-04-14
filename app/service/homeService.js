'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
  async index() {
    console.log('service 被执行了');
    const { app } = this;
    const user = await app.mysql.select('sys_user');
    // console.log(user);
    return user;
  }
}

module.exports = HomeService;
