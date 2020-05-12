'use strict';

const Controller = require('../core/baseController');
const { SUCCESS, ERROR } = require('../public/common');

class houseController extends Controller {
  // 查询角色列表
  async getHouseList() {
    console.log('--------');
    const ctx = this.ctx;
    const list = await ctx.model.House.findAll({
    });
    console.log(SUCCESS(list));
    ctx.body = SUCCESS(list);
  }
  async getAllHouse() {
    console.log('gjhghjghjgjhgjh');
    const ctx = this.ctx;
    const list = await ctx.model.House.findAll({
    });
    console.log(SUCCESS(list));
    ctx.body = SUCCESS(list);
  }
  async addHouse() {
    const ctx = this.ctx;
    const { houseName, city, district, street, area, houseType, orientation, payment, subway, rentType,
      isRent, houseAge} = ctx.request.body;
    const house = await ctx.model.House.create({
      houseName,
      city, 
      district, 
      street, 
      area, 
      houseType, 
      orientation, 
      payment, 
      subway, 
      rentType,
      isRent, 
      houseAge,
      crtTm: new Date(),
      crtBy: 'admin',
      updTm: new Date(),
      updBy: 'admin',
      edit_flag: 1,
    });
    ctx.body = SUCCESS(house);
  }

  async updateHouse() {
    const ctx = this.ctx;
    const { id, houseName, city, district, street, area, houseType, orientation, payment, subway, rentType,
      isRent, houseAge, editFlag} = ctx.request.body;
    const house = await ctx.model.House.update({ houseName, city, district, street, area, houseType, orientation, payment, subway, rentType,
      isRent, houseAge, editFlag}, {
      where: {
        id
      }
    });
    ctx.body = SUCCESS(house);
  }

}

module.exports = houseController;