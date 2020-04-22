'use strict';

const Controller = require('../core/baseController');
const { SUCCESS, ERROR } = require('../public/common');

class roleController extends Controller {
  // 查询角色列表
  async getRoleList() {
    console.log('--------');
    const ctx = this.ctx;
    // const { username, password } = ctx.request.body;
    const list = await ctx.model.Role.findAll({
    });
    console.log(SUCCESS(list));
    ctx.body = SUCCESS(list);
  }
  

}
module.exports = roleController;