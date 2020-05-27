'use strict';

const Controller = require('../core/baseController');
const { SUCCESS, ERROR } = require('../public/common');

class contractController extends Controller {
  // 查询角色列表
  async getContractList() {
    console.log('--------');
    const ctx = this.ctx;
    // const { username, password } = ctx.request.body;
    const count = await ctx.model.Contract.count({})
    const list = await ctx.model.Contract.findAll({
      where: {
        editFlag:'1'
      }
    });
    console.log(SUCCESS(list));
    ctx.body = SUCCESS({list, totalCount:count});
  }
  async getContractListById() {
    console.log('--------');
    const ctx = this.ctx;
    const { id, roleId } = ctx.request.body;
    let count = 0
    let list = []
    console.log(roleId)
    if(roleId == 2){
      list = await ctx.model.Contract.findAll({
        where: {
          houseOwnerId: id
        }
      });
      count = await ctx.model.Contract.count({
        where: {
          houseOwnerId: id
        }
      })
    }else if(roleId == 3){
      list = await ctx.model.Contract.findAll({
        where: {
          rentId: id
        }
      });
      count = await ctx.model.Contract.count({
        where: {
          rentId: id
        }
      })
    }
    console.log(SUCCESS(list));
    ctx.body = SUCCESS({list, totalCount:count});
  }
  async addContract() {
    const ctx = this.ctx;
    const {houseId,rentId,houseOwnerId,rentTime,startTime,endTime,houseName,houseOwnerName,rentName} = ctx.request.body;
    const contract = await ctx.model.Contract.create({
      houseId,
      houseName,
      rentId,
      rentName,
      houseOwnerId,
      houseOwnerName,
      rentTime,
      startTime,
      endTime,
      crtTm: new Date(),
      crtBy: 'admin',
      updTm: new Date(),
      updBy: 'admin',
      editFlag: 1,
    });
    ctx.body = SUCCESS({});
  }

  async updateContract() {
    const ctx = this.ctx;
    const { id, houseId,rentId,houseOwnerId,rentTime,startTime,endTime, editFlag,houseName,houseOwnerName,rentName} = ctx.request.body;
    const contract = await ctx.model.Contract.update({ houseId,rentId,houseOwnerId,rentTime,startTime,endTime, houseName,houseOwnerName,rentName,editFlag}, {
      where: {
        id
      }
    });
    ctx.body = SUCCESS(contract);
  }

}

module.exports = contractController;