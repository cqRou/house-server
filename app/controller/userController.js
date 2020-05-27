'use strict';

const Controller = require('../core/baseController');
const { SUCCESS, ERROR } = require('../public/common');

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


  async addUser() {
    const ctx = this.ctx;
    const { username, password, roleId, nickname} = ctx.request.body;
    const user = await ctx.model.User.create({
      username,
      password,
      address: '',
      roleId,
      nickname,
      crtTm: new Date(),
      crtBy: 'admin',
      updTm: new Date(),
      updBy: 'admin',
      editFlag: 1,
    });
    ctx.body = SUCCESS({});
  }

  async updateUser() {
    const ctx = this.ctx;
    const { id, username, password, roleId, nickname , editFlag} = ctx.request.body;
    console.log(editFlag)
    const user = await ctx.model.User.update({ username, password, roleId, nickname, editFlag}, {
      where: {
        id
      }
    });
    ctx.body = SUCCESS(user);
  }
  

  // 查询用户列表
  async getUserList() {
    console.log('--------');
    const ctx = this.ctx;
    // const { username, password } = ctx.request.body;
    const list = await ctx.model.User.findAll({
      where: {
        editFlag:'1'
      }
    });
    const count = await ctx.model.User.count({})
    ctx.body = SUCCESS({list, totalCount:count});
  }

  // 按条件查询
  async getUserInfo() {
    const ctx = this.ctx;
    const { username } = ctx.request.body;
    const userInfo = await ctx.model.User.findAll({
      where: {
        username,
      },
    });
    console.log(SUCCESS(userInfo));
    ctx.body = SUCCESS(userInfo);
  }

    // 按条件查询
    async getUserName() {
      const ctx = this.ctx;
      const { id } = ctx.request.body;
      const name = await ctx.model.User.findAll({
        attributes: ['username'],
        where: {
          id,
        },
      });
      ctx.body = SUCCESS(name);
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
