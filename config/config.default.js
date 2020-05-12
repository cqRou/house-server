/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
// module.exports = appInfo => {
//   /**
//    * built-in config
//    * @type {Egg.EggAppConfig}
//    **/
//   const config = exports = {};

//   // use for cookie sign key, should change to your own and keep security
//   config.keys = appInfo.name + '_1583331585019_5942';

//   // add your middleware config here
//   config.middleware = [];

//   config.mysql = {
//     // 单数据库信息配置
//     client: {
//       // host
//       host: '111.230.219.130',
//       // 端口号
//       port: '3306',
//       // 用户名
//       user: 'root',
//       // 密码
//       password: '123456',
//       // 数据库名
//       database: 'cses',
//     },
//     // 是否加载到 app 上，默认开启
//     app: true,
//     // 是否加载到 agent 上，默认关闭
//     agent: false,
//   };

//   // add your user config here
//   const userConfig = {
//     // myAppName: 'egg',
//   };

//   config.security = {
//     csrf: {
//       enable: false, // 通过 header 传递 CSRF token 的默认字段为 x-csrf-token
//     },
//   };

//   return {
//     ...config,
//     ...userConfig,
//   };
// };


/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1553528793275_7075';

  // add your middleware config here
  config.middleware = [];
  config.sequelize = {
    dialect: 'mysql',
    host: '111.230.219.130',
    port: 3306,
    database: 'example', // 数据库民
    username: 'root', // 数据库的用户名
    password: '844086765wwq.', //
  };
  // add your user config here
  const userConfig = {
    // myAppName: ‘egg‘,
  };

  config.security = {
    csrf: {
      enable: false, // 通过 header 传递 CSRF token 的默认字段为 x-csrf-token
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
