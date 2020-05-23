'use strict';

const Controller = require('../core/baseController');
const { SUCCESS, ERROR } = require('../public/common');

class infoController extends Controller {
  // 查询角色列表
  async getInfoList() {
    console.log('--------');
    const ctx = this.ctx;
    const {id} = ctx.request.body;
    const list = await ctx.model.Info.findAll({
      where: {
        houseOwnerId:id
      }
    });
    const count = await ctx.model.Info.count({})
    ctx.body = SUCCESS({list, totalCount:count});
  }
  async addInfo() {
    const ctx = this.ctx;
    console.log('--------',ctx.request.body);
    const {rentId,houseOwnerId,msg,rentName,houseOwnerName,houseId,houseName} = ctx.request.body;
    const res = await ctx.model.Info.create({
      rentId,
      houseOwnerId,
      msg,
      rentName,
      houseOwnerName,
      houseId,
      houseName,
      isSentPhone: 0,
      isMakeContract:0,
      crtTm: new Date(),
      crtBy: 'admin',
      updTm: new Date(),
      updBy: 'admin',
      editFlag: 1,
    });
    ctx.body = SUCCESS({});
  }

  async updateInfo() {
    const ctx = this.ctx;
    const { id,rentId,rentName,houseOwnerId,houseOwnerName,msg,isSentPhone,isMakeContract,houseId,houseName,editFlag} = ctx.request.body;
    const res = await ctx.model.Info.update({rentId,rentName,houseOwnerId,houseOwnerName,msg,isSentPhone,isMakeContract,houseId,houseName,editFlag}, {
      where: {
        id
      }
    });
    ctx.body = SUCCESS({});
  }

}

module.exports = infoController;