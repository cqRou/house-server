'use strict';

const Controller = require('../core/baseController');
const { SUCCESS, ERROR } = require('../public/common');

class paymentController extends Controller {
  // 查询角色列表
  async getPaymentList() {
    console.log('--------');
    const ctx = this.ctx;
    const list = await ctx.model.Payment.findAll({
    });
    console.log(SUCCESS(list));
    const count = await ctx.model.Payment.count({})
    ctx.body = SUCCESS({list, totalCount:count});
  }
  async addPayment() {
    const ctx = this.ctx;
    const {houseId,houseName,rentId,rentName,houseOwnerId,houseOwnerName,money} = ctx.request.body;
    const payment = await ctx.model.Payment.create({
      houseId,
      houseName,
      rentId,
      rentName,
      houseOwnerId,
      houseOwnerName,
      money,
      isPay: 0,
      deposit: money*0.3,
      crtTm: new Date(),
      crtBy: 'admin',
      updTm: new Date(),
      updBy: 'admin',
      editFlag: 1,
    });
    ctx.body = SUCCESS({});
  }

  async updatePayment() {
    const ctx = this.ctx;
    const { id,houseId,houseName,rentId,rentName,houseOwnerId,houseOwnerName,money,isPay,deposit,editFlag} = ctx.request.body;
    const payment = await ctx.model.Payment.update({ houseId,houseName,rentId,rentName,houseOwnerId,houseOwnerName,money,isPay,deposit,editFlag}, {
      where: {
        id
      }
    });
    ctx.body = SUCCESS(payment);
  }

}

module.exports = paymentController;