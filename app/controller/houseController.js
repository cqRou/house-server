'use strict';

const Controller = require('../core/baseController');
const { Op } = require("sequelize");
const { SUCCESS, ERROR } = require('../public/common');

class houseController extends Controller {
  // 查询角色列表
  async getHouseList() {
    const ctx = this.ctx;
    const list = await ctx.model.House.findAll({
      where: {
        editFlag:'1'
      }
    });
    console.log(SUCCESS(list));
    const count = await ctx.model.House.count({})
    ctx.body = SUCCESS({list, totalCount:count});
  }
  async getHouseById() {
    const ctx = this.ctx;
    const {id} = ctx.request.body;
    const list = await ctx.model.House.findAll({
      where: {
        id
      }
    });
    console.log(SUCCESS(list));
    ctx.body = SUCCESS(list);
  }
  async getAllHouse() {
    const ctx = this.ctx;
    const {houseCity,houseDistrict, housePayment} = ctx.request.body;
    const list = await ctx.model.House.findAll({
      where: {
        city:{
          [Op.like]: '%'+houseCity+'%'
        },
        district:{
          [Op.like]: '%'+houseDistrict+'%'
        },
        payment:{
          [Op.between]: housePayment
        },
        editFlag:'1'
      }
    });
    console.log(SUCCESS(list));
    const count = await ctx.model.House.count({})
    ctx.body = SUCCESS({list, totalCount:count});
  }
  async addHouse() {
    const ctx = this.ctx;
    const { houseName, city, district, street, area, houseType, orientation, payment, subway, rentType,
      isRent, houseAge, houseDescription,interested} = ctx.request.body;
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
      houseDescription,
      interested,
      crtTm: new Date(),
      crtBy: 'admin',
      updTm: new Date(),
      updBy: 'admin',
      houseOwnerId:10004,
      houseOwnerName:'user',
      editFlag: 1,
    });
    ctx.body = SUCCESS({});
  }

  async updateHouse() {
    const ctx = this.ctx;
    const { id, houseName, city, district, street, area, houseType, orientation, payment, subway, rentType,
      isRent, houseAge, houseDescription,interested, editFlag} = ctx.request.body;
    const house = await ctx.model.House.update({ houseName, city, district, street, area, houseType, orientation, payment, subway, rentType,
      isRent, houseAge,houseDescription,interested, editFlag}, {
      where: {
        id
      }
    });
    ctx.body = SUCCESS(house);
  }

}

module.exports = houseController;