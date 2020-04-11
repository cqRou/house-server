'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx, app } = this;
    // console.log('------------------------', _.camelCase('user_id'));
    const res = await app.mysql.select('sys_user');
    console.log(res);
    ctx.body = res;
  }
}

module.exports = HomeController;
