'use strict';

const Controller = require('../core/baseController');
const { SUCCESS, ERROR } = require('../public/common');

class contractController extends Controller {
  // 查询角色列表
  async getContractList() {
    console.log('--------');
    const ctx = this.ctx;
    // const { username, password } = ctx.request.body;
    const list = await ctx.model.Contract.findAll({
    });
    console.log(SUCCESS(list));
    ctx.body = SUCCESS(list);
  }
  async addContract() {
    const ctx = this.ctx;
    const {houseId,rentId,houseOwnerId,rentTime,startTime,endTime} = ctx.request.body;
    const contract = await ctx.model.Contract.create({
      houseId,
      rentId,
      houseOwnerId,
      rentTime,
      startTime,
      endTime,
      crtTm: new Date(),
      crtBy: 'admin',
      updTm: new Date(),
      updBy: 'admin',
      edit_flag: 1,
    });
    ctx.body = SUCCESS(contract);
  }

  async updateContract() {
    const ctx = this.ctx;
    const { id, houseId,rentId,houseOwnerId,rentTime,startTime,endTime, editFlag} = ctx.request.body;
    const contract = await ctx.model.Contract.update({ houseId,rentId,houseOwnerId,rentTime,startTime,endTime, editFlag}, {
      where: {
        id
      }
    });
    ctx.body = SUCCESS(contract);
  }

}

module.exports = contractController;