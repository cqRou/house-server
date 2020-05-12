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
    ctx.body = SUCCESS(list);
  }
  async addPayment() {
    const ctx = this.ctx;
    const {houseId,rentId,houseOwnerId,money} = ctx.request.body;
    const payment = await ctx.model.Payment.create({
      houseId,
      rentId,
      houseOwnerId,
      money,
      isPay: 0,
      deposit: money*0.3,
      crtTm: new Date(),
      crtBy: 'admin',
      updTm: new Date(),
      updBy: 'admin',
      editFlag: 1,
    });
    ctx.body = SUCCESS(payment);
  }

  async updatePayment() {
    const ctx = this.ctx;
    const { id,houseId,rentId,houseOwnerId,money,isPay,deposit,editFlag} = ctx.request.body;
    const payment = await ctx.model.Payment.update({ houseId,rentId,houseOwnerId,money,isPay,deposit,editFlag}, {
      where: {
        id
      }
    });
    ctx.body = SUCCESS(payment);
  }

}

module.exports = paymentController;