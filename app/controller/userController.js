'use strict';

const Controller = require('../core/baseController');

class UserController extends Controller {

  async index() {
    const ctx = this.ctx;
    ctx.body = await ctx.model.User.findAll({ limit: 10, offset: 0, order: [[ 'id', 'desc' ]] });
  }

  async query() {
    const ctx = this.ctx;
    const userId = ctx.request.body.id;
    const result = await ctx.service.userService.query(userId);
    ctx.body = result || '';
  }


  async create() {
    const ctx = this.ctx;
    const user = await ctx.model.User.create({
      username: 'xc',
      password: '123456',
      address: '舟山',
      role_id: 1,
      telephone: 136166000000,
      auth_list: null,
      role_name: '管理员',
      edit_flag: 0,
    });
    ctx.status = 201;
    ctx.body = user;
  }

  async update() {
    const ctx = this.ctx;
    const id = 106;
    const user = await ctx.model.User.findByPk(id);
    if (!user) {
      ctx.status = 404;
      return;
    }
    await user.update({ name: '李四', age: 43 });
    ctx.body = user;
  }

  // async destroy() {
  //   const ctx = this.ctx;
  //   const id = 213;
  //   const user = await ctx.model.User.findByPk(id);
  //   if (!user) {
  //     ctx.status = 404;
  //     return;
  //   }

  //   await user.destroy();
  //   ctx.status = 200;
  //   ctx.body = '删除成功';
  // }
}

module.exports = UserController;
