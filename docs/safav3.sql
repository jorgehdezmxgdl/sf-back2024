/*
 Navicat MySQL Dump SQL

 Source Server         : Local
 Source Server Type    : MySQL
 Source Server Version : 80300 (8.3.0)
 Source Host           : localhost:3306
 Source Schema         : safav3

 Target Server Type    : MySQL
 Target Server Version : 80300 (8.3.0)
 File Encoding         : 65001

 Date: 20/05/2024 22:46:21
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for empleados
-- ----------------------------
DROP TABLE IF EXISTS `empleados`;
CREATE TABLE `empleados` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(150) DEFAULT NULL,
  `apellido_paterno` varchar(150) DEFAULT NULL,
  `apellido_materno` varchar(150) DEFAULT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `genero` enum('F','M','X','N') DEFAULT NULL,
  `curp` varchar(18) DEFAULT NULL,
  `numero_ss` varchar(11) DEFAULT NULL,
  `rfc` varchar(13) DEFAULT NULL,
  `imagen` blob,
  `email` varchar(150) DEFAULT NULL,
  `telef_casa` varchar(20) DEFAULT NULL,
  `telef_mobile` varchar(20) DEFAULT NULL,
  `emergencia` varchar(200) DEFAULT NULL,
  `telef_emergencia` varchar(20) DEFAULT NULL,
  `comentarios_emergencia` varchar(255) DEFAULT NULL,
  `estado_civil` enum('S','C','D','V','U','O') DEFAULT NULL,
  `tipo_sangre` varchar(25) DEFAULT NULL,
  `activo` tinyint DEFAULT NULL,
  `edicion` tinyint DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `curp_UNIQUE` (`curp`),
  UNIQUE KEY `rfc_UNIQUE` (`rfc`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for modulos
-- ----------------------------
DROP TABLE IF EXISTS `modulos`;
CREATE TABLE `modulos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `activo` tinyint DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nombre_UNIQUE` (`nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for submodulos
-- ----------------------------
DROP TABLE IF EXISTS `submodulos`;
CREATE TABLE `submodulos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `modulo` int DEFAULT NULL,
  `nombre` varchar(30) DEFAULT NULL,
  `descripcion` varchar(100) DEFAULT NULL,
  `adicionar` tinyint DEFAULT NULL,
  `eliminar` tinyint DEFAULT NULL,
  `consultar` tinyint DEFAULT NULL,
  `modificar` tinyint DEFAULT NULL,
  `activo` tinyint DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `submod-modupk_idx` (`modulo`),
  CONSTRAINT `submod-modupk` FOREIGN KEY (`modulo`) REFERENCES `modulos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for tcodestados
-- ----------------------------
DROP TABLE IF EXISTS `tcodestados`;
CREATE TABLE `tcodestados` (
  `id` int unsigned NOT NULL COMMENT 'Referencia única',
  `estado` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL COMMENT 'Nombre del estado',
  PRIMARY KEY (`id`),
  UNIQUE KEY `estado_UNIQUE` (`estado`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Table structure for tcodmunicipios
-- ----------------------------
DROP TABLE IF EXISTS `tcodmunicipios`;
CREATE TABLE `tcodmunicipios` (
  `id` int unsigned NOT NULL COMMENT 'Referencia única',
  `estado_id` int unsigned NOT NULL COMMENT 'Referencia del estado',
  `municipio` varchar(150) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL COMMENT 'Nombre del municipio',
  PRIMARY KEY (`id`,`estado_id`),
  KEY `fk_cat_municipios_cat_estados1_idx` (`estado_id`),
  CONSTRAINT `cod_mun_fk` FOREIGN KEY (`estado_id`) REFERENCES `tcodestados` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Table structure for tcodpostal
-- ----------------------------
DROP TABLE IF EXISTS `tcodpostal`;
CREATE TABLE `tcodpostal` (
  `id` int unsigned NOT NULL DEFAULT '0' COMMENT 'Identificador único',
  `municipio_id` int unsigned NOT NULL COMMENT 'Referencia de municipio',
  `estado_id` int unsigned NOT NULL COMMENT 'Referencia del estado',
  `cp` mediumint NOT NULL COMMENT 'Código postal',
  `colonia` varchar(150) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL COMMENT 'Colonia',
  PRIMARY KEY (`id`),
  KEY `fk_cat_cp_cat_municipios1_idx` (`municipio_id`),
  KEY `fk_cat_cp_cat_estados1_idx` (`estado_id`),
  KEY `cp` (`cp`),
  CONSTRAINT `cdpostal_estafk` FOREIGN KEY (`estado_id`) REFERENCES `tcodestados` (`id`),
  CONSTRAINT `cdpostal_munfk` FOREIGN KEY (`municipio_id`) REFERENCES `tcodmunicipios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Table structure for tcontratos
-- ----------------------------
DROP TABLE IF EXISTS `tcontratos`;
CREATE TABLE `tcontratos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(80) NOT NULL,
  `activo` tinyint DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nombre_UNIQUE` (`nombre`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for tdepartamentos
-- ----------------------------
DROP TABLE IF EXISTS `tdepartamentos`;
CREATE TABLE `tdepartamentos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(80) NOT NULL,
  `activo` tinyint DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nombre_UNIQUE` (`nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for tdisenador
-- ----------------------------
DROP TABLE IF EXISTS `tdisenador`;
CREATE TABLE `tdisenador` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(90) NOT NULL,
  `activo` tinyint DEFAULT '1',
  `created_At` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_At` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nombre_UNIQUE` (`nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=382 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for tdomicilios
-- ----------------------------
DROP TABLE IF EXISTS `tdomicilios`;
CREATE TABLE `tdomicilios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `empleado_id` int NOT NULL,
  `domicilio` varchar(255) DEFAULT NULL,
  `cp` varchar(5) DEFAULT NULL,
  `colonia` int DEFAULT NULL,
  `municipio` int DEFAULT NULL,
  `estado` int DEFAULT NULL,
  `pais` int DEFAULT NULL,
  `activo` tinyint(1) DEFAULT '1',
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`,`empleado_id`),
  KEY `domemp_fk` (`empleado_id`),
  CONSTRAINT `domemp_fk` FOREIGN KEY (`empleado_id`) REFERENCES `empleados` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for templeado_departamentos
-- ----------------------------
DROP TABLE IF EXISTS `templeado_departamentos`;
CREATE TABLE `templeado_departamentos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `empleado_id` int NOT NULL,
  `departamento_id` int NOT NULL,
  `puesto_id` int NOT NULL,
  `es_jefe` tinyint(1) DEFAULT '0',
  `salario` float DEFAULT '0',
  `fecha_ingreso` datetime DEFAULT NULL,
  `fecha_renuncia` datetime DEFAULT NULL,
  `observaciones` text,
  `activo` tinyint(1) DEFAULT '1',
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`,`departamento_id`,`empleado_id`,`puesto_id`) USING BTREE,
  KEY `empl_fk` (`empleado_id`),
  KEY `depar_fk` (`departamento_id`),
  KEY `puesto_fk` (`puesto_id`),
  CONSTRAINT `depar_fk` FOREIGN KEY (`departamento_id`) REFERENCES `tdepartamentos` (`id`),
  CONSTRAINT `empl_fk` FOREIGN KEY (`empleado_id`) REFERENCES `empleados` (`id`),
  CONSTRAINT `puesto_fk` FOREIGN KEY (`puesto_id`) REFERENCES `tpuestos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for tgeneros
-- ----------------------------
DROP TABLE IF EXISTS `tgeneros`;
CREATE TABLE `tgeneros` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `active` tinyint DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nombre_UNIQUE` (`nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for tml
-- ----------------------------
DROP TABLE IF EXISTS `tml`;
CREATE TABLE `tml` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) NOT NULL,
  `activo` tinyint DEFAULT '1',
  `created_At` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_At` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nombre_UNIQUE` (`nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=83 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for tpaises
-- ----------------------------
DROP TABLE IF EXISTS `tpaises`;
CREATE TABLE `tpaises` (
  `id` int NOT NULL AUTO_INCREMENT,
  `iso` char(2) DEFAULT NULL,
  `nombre` varchar(80) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=241 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for tpuestos
-- ----------------------------
DROP TABLE IF EXISTS `tpuestos`;
CREATE TABLE `tpuestos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(80) NOT NULL,
  `activo` tinyint DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nombre_UNIQUE` (`nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for usuarios
-- ----------------------------
DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `clave` varchar(50) DEFAULT NULL,
  `passwd` varchar(255) DEFAULT NULL,
  `empleado_id` int DEFAULT NULL,
  `innactividad` float NOT NULL DEFAULT '1',
  `activo` tinyint DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `clave_UNIQUE` (`clave`),
  KEY `user_emplofk_idx` (`empleado_id`),
  CONSTRAINT `user_emplofk` FOREIGN KEY (`empleado_id`) REFERENCES `empleados` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

SET FOREIGN_KEY_CHECKS = 1;
