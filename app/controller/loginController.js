'use strict';

const Controller = require('../core/baseController');
const { SUCCESS, ERROR } = require('../public/common');
class UserController extends Controller {
  // 查询所有的数据
  async getUserInfos() {
    const { ctx, app } = this;
    const res = await app.mysql.select('sys_user');
    console.log(res);
    ctx.body = res;
  }

  // 按条件查询
  async getUserInfo() {
    console.log('--------');
    const { ctx, app } = this;
    const { username, password } = ctx.request.body;
    const userInfo = await app.mysql.select('sys_user', {
      where: {
        username,
        password,
      },
    });
    // const permissionsList = await app.mysql.select('permission', {
    //   where: {
    //     username: userInfo[0].username,
    //   },
    // });
    // userInfo.permissionsList = permissionsList;
    console.log(SUCCESS(userInfo));
    ctx.body = SUCCESS(userInfo);
  }

  // 插入数据
  async insertUser() {
    const { ctx, app } = this;
    // 这里使用mock数据id自增
    const { affectedRows } = await app.mysql.insert('sys_user', {
      username: 'xc',
      password: '123456',
      address: '舟山',
      role_id: 1,
      // crt_tm: '2020-03-04T16:00:00.000Z',
      telephone: 136166000000,
      auth_list: null,
      role_name: '管理员',
      edit_flag: 0,
    });
    // 一般使用res.affectedRows来判断sql语句是否执行成功
    console.log(affectedRows);
    ctx.body = affectedRows;
  }

  // 更新数据库
  async updateUser() {
    const { ctx, app } = this;
    const name = ctx.request.body.name;

    const row = {
      username: name,
    };

    const options = {
      where: {
        id: 4,
      },
    };
    const { affectedRows } = await app.mysql.update('sys_user', row, options);
    console.log(affectedRows);
    ctx.body = affectedRows;
  }

  // 万能写法
  // const results = await this.app.mysql.query('update posts set hits = (hits + ?) where id = ?', [1, postId]);
}

module.exports = UserController;
