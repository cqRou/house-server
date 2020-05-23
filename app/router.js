'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.userController.index);
  // router.get('/', controller.houseController.getAllHouse);

  router.post('/queryUserInfo', controller.userController.query);
  // router.post('/queryUserInfo', controller.userController.queryUserInfo);
  // router.post('/insertUser', controller.userController.insertUser);
  // router.post('/updateUser', controller.userController.updateUser);

  //login
  router.post('/login/auth', controller.loginController.getUserInfo);
  router.post('/login/getInfo', controller.loginController.getUserInfo);
  //user
  router.get('/user/list', controller.userController.getUserList);
  router.post('/user/addUser', controller.userController.addUser);
  router.post('/user/updateUser', controller.userController.updateUser);
  router.post('/user/getInfo', controller.userController.getUserInfo);
  router.post('/user/getUserName', controller.userController.getUserName);
  //role
  router.get('/role/getAllRoles', controller.roleController.getRoleList);
  //house
  router.get('/house/list', controller.houseController.getHouseList);
  router.post('/house/getAllHouse', controller.houseController.getAllHouse);
  router.post('/house/addHouse', controller.houseController.addHouse);
  router.post('/house/updateHouse', controller.houseController.updateHouse);
  router.post('/house/getHouseById', controller.houseController.getHouseById);

  //contract
  router.get('/contract/list', controller.contractController.getContractList);
  router.post('/contract/addContract', controller.contractController.addContract);
  router.post('/contract/updateContract', controller.contractController.updateContract);
  router.post('/contract/getContractListById', controller.contractController.getContractListById);
  //payment
  router.get('/payment/list', controller.paymentController.getPaymentList);
  router.post('/payment/addPayment', controller.paymentController.addPayment);
  router.post('/payment/updatePayment', controller.paymentController.updatePayment);
  //info
  router.post('/info/list', controller.infoController.getInfoList);
  router.post('/info/addInfo', controller.infoController.addInfo);
  router.post('/info/updateInfo', controller.infoController.updateInfo);
};
