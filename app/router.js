'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.userController.index);

  router.post('/queryUserInfo', controller.userController.query);
  // router.post('/queryUserInfo', controller.userController.queryUserInfo);
  // router.post('/insertUser', controller.userController.insertUser);
  // router.post('/updateUser', controller.userController.updateUser);

  router.post('/login/auth', controller.loginController.getUserInfo);
  router.post('/login/getInfo', controller.loginController.getUserInfo);
};
