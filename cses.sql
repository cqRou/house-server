/*
 Navicat Premium Data Transfer

 Source Server         : 111.230.219.130
 Source Server Type    : MySQL
 Source Server Version : 50561
 Source Host           : 111.230.219.130:3306
 Source Schema         : cses

 Target Server Type    : MySQL
 Target Server Version : 50561
 File Encoding         : 65001

 Date: 13/04/2020 22:53:56
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for equipment
-- ----------------------------
DROP TABLE IF EXISTS `equipment`;
CREATE TABLE `equipment`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `eq_name` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '设备名',
  `position` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '类型',
  `address` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '设备状态',
  `status` bigint(20) NULL DEFAULT NULL COMMENT '设备状态',
  `last_update` date NULL DEFAULT NULL COMMENT '上一次维护时间',
  `next_update` date NULL DEFAULT NULL COMMENT '下一次维护时间',
  `telephone` bigint(20) NULL DEFAULT NULL COMMENT '责任人',
  `blame` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '责任人',
  `edit_flag` int(2) NULL DEFAULT NULL COMMENT '软删标志',
  `updated_at` date NULL DEFAULT NULL,
  `created_at` date NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 13 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of equipment
-- ----------------------------
INSERT INTO `equipment` VALUES (1, '灭火器1', '121.11，451', '石麟大楼一楼', 1, '2020-04-08', '2020-04-25', 136111454, '王师傅', 1, NULL, NULL);
INSERT INTO `equipment` VALUES (2, '灭火器1', '121.11，451', '石麟大楼一楼', 1, '2020-04-08', '2020-04-25', 136111454, '王师傅', 1, NULL, NULL);

-- ----------------------------
-- Table structure for route
-- ----------------------------
DROP TABLE IF EXISTS `route`;
CREATE TABLE `route`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `start` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '起点',
  `end` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '终点',
  `look_points` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '点集合',
  `created_at` date NULL DEFAULT NULL,
  `updated_at` date NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 12 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for scene
-- ----------------------------
DROP TABLE IF EXISTS `scene`;
CREATE TABLE `scene`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `scene_name` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '场景名称',
  `entry_list` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '实体列表',
  `address_desc` date NULL DEFAULT NULL,
  `security_points_list` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '安全点列表',
  `created_at` date NULL DEFAULT NULL,
  `updated_at` date NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 12 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for security_point
-- ----------------------------
DROP TABLE IF EXISTS `security_point`;
CREATE TABLE `security_point`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `lnt_lats` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '经纬度',
  `address_name` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '位置名称',
  `max` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '最大容纳人数',
  `remark` bigint(20) NULL DEFAULT NULL COMMENT '其他详情信息',
  `edit_flag` int(2) NULL DEFAULT NULL COMMENT '软删标志',
  `updated_at` date NULL DEFAULT NULL,
  `created_at` date NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 12 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for sys_permission
-- ----------------------------
DROP TABLE IF EXISTS `sys_permission`;
CREATE TABLE `sys_permission`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `permission_code` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '权限标识',
  `edit_flag` int(2) NULL DEFAULT NULL COMMENT '软删标志',
  `updated_at` date NULL DEFAULT NULL,
  `created_at` date NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 12 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for sys_role
-- ----------------------------
DROP TABLE IF EXISTS `sys_role`;
CREATE TABLE `sys_role`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `role_name` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '角色名',
  `updated_at` date NULL DEFAULT NULL,
  `created_at` date NULL DEFAULT NULL,
  `role_id` varchar(0) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 12 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for sys_user
-- ----------------------------
DROP TABLE IF EXISTS `sys_user`;
CREATE TABLE `sys_user`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `username` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户名',
  `password` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '密码',
  `address` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '地址',
  `role_id` bigint(20) NULL DEFAULT NULL COMMENT '角色ID',
  `crt_tm` date NULL DEFAULT NULL COMMENT '创建时间',
  `telephone` bigint(20) NULL DEFAULT NULL COMMENT '电话号码',
  `auth_list` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '权限列表',
  `role_name` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '角色名称',
  `edit_flag` int(2) NULL DEFAULT NULL COMMENT '软删标志',
  `updated_at` date NULL DEFAULT NULL,
  `created_at` date NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 12 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_user
-- ----------------------------
INSERT INTO `sys_user` VALUES (1, 'zaoren', '123456', '杭州', 1, '2020-03-05', 136166000000, NULL, '超级管理员', 0, NULL, NULL);
INSERT INTO `sys_user` VALUES (2, 'cq', '123456', '宁波', 1, '2020-01-08', 13616620111, NULL, '管理员', 0, NULL, NULL);
INSERT INTO `sys_user` VALUES (3, 'lqy', '123456', '宁波', 1, '2020-04-07', 1355544544, '1', '管理员', 0, NULL, NULL);
INSERT INTO `sys_user` VALUES (4, 'xc', '123456', '舟山', 1, NULL, 136166000000, NULL, '管理员', 0, NULL, NULL);

SET FOREIGN_KEY_CHECKS = 1;
