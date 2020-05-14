'use strict';

const Controller = require('../core/baseController');
const { SUCCESS, ERROR } = require('../public/common');

class infoController extends Controller {
  // 查询角色列表
  async getInfoList() {
    console.log('--------');
    const ctx = this.ctx;
    const list = await ctx.model.Info.findAll({
    });
    ctx.body = SUCCESS(list);
  }
  async addInfo() {
    const ctx = this.ctx;
    const {rentId,houseOwnerId,msg} = ctx.request.body;
    const info = await ctx.model.Info.create({
      rentId,
      rentName,
      houseOwnerId,
      houseOwnerName,
      msg,
      crtTm: new Date(),
      crtBy: 'admin',
      updTm: new Date(),
      updBy: 'admin',
      editFlag: 1,
    });
    ctx.body = SUCCESS(info);
  }

  async updateInfo() {
    const ctx = this.ctx;
    const { id,rentId,rentName,houseOwnerId,houseOwnerName,msg,isSentPhone,isMakeContract,editFlag} = ctx.request.body;
    const info = await ctx.model.Payment.update({rentId,rentName,houseOwnerId,houseOwnerName,msg,isSentPhone,isMakeContract,editFlag}, {
      where: {
        id
      }
    });
    ctx.body = SUCCESS(info);
  }

}

module.exports = infoController;