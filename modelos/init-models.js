var DataTypes = require("sequelize").DataTypes;
var _empleado = require("./empleado");
var _modulo = require("./modulo");
var _submodulo = require("./submodulo");
var _tcodestado = require("./tcodestado");
var _tcodmunicipio = require("./tcodmunicipio");
var _tcodpostal = require("./tcodpostal");
var _tcompra = require("./tcompra");
var _tcompras_detalle = require("./tcompras_detalle");
var _tcontrato = require("./tcontrato");
var _tdepartamento = require("./tdepartamento");
var _tdisenador = require("./tdisenador");
var _tdomicilio = require("./tdomicilio");
var _templeado_departamento = require("./templeado_departamento");
var _tgenero = require("./tgenero");
var _tml = require("./tml");
var _tpaise = require("./tpaise");
var _tproducto = require("./tproducto");
var _tproveedor_domicilio = require("./tproveedor_domicilio");
var _tproveedore = require("./tproveedore");
var _tpuesto = require("./tpuesto");
var _usuario = require("./usuario");

function initModels(sequelize) {
  var empleado = _empleado(sequelize, DataTypes);
  var modulo = _modulo(sequelize, DataTypes);
  var submodulo = _submodulo(sequelize, DataTypes);
  var tcodestado = _tcodestado(sequelize, DataTypes);
  var tcodmunicipio = _tcodmunicipio(sequelize, DataTypes);
  var tcodpostal = _tcodpostal(sequelize, DataTypes);
  var tcompra = _tcompra(sequelize, DataTypes);
  var tcompras_detalle = _tcompras_detalle(sequelize, DataTypes);
  var tcontrato = _tcontrato(sequelize, DataTypes);
  var tdepartamento = _tdepartamento(sequelize, DataTypes);
  var tdisenador = _tdisenador(sequelize, DataTypes);
  var tdomicilio = _tdomicilio(sequelize, DataTypes);
  var templeado_departamento = _templeado_departamento(sequelize, DataTypes);
  var tgenero = _tgenero(sequelize, DataTypes);
  var tml = _tml(sequelize, DataTypes);
  var tpaise = _tpaise(sequelize, DataTypes);
  var tproducto = _tproducto(sequelize, DataTypes);
  var tproveedor_domicilio = _tproveedor_domicilio(sequelize, DataTypes);
  var tproveedore = _tproveedore(sequelize, DataTypes);
  var tpuesto = _tpuesto(sequelize, DataTypes);
  var usuario = _usuario(sequelize, DataTypes);

  tdomicilio.belongsTo(empleado, { as: "empleado", foreignKey: "empleado_id"});
  empleado.hasMany(tdomicilio, { as: "tdomicilios", foreignKey: "empleado_id"});
  templeado_departamento.belongsTo(empleado, { as: "empleado", foreignKey: "empleado_id"});
  empleado.hasMany(templeado_departamento, { as: "templeado_departamentos", foreignKey: "empleado_id"});
  usuario.belongsTo(empleado, { as: "empleado", foreignKey: "empleado_id"});
  empleado.hasMany(usuario, { as: "usuarios", foreignKey: "empleado_id"});
  submodulo.belongsTo(modulo, { as: "parentModulo", foreignKey: "modulo"});
  modulo.hasMany(submodulo, { as: "submodulos", foreignKey: "modulo"});
  tcodmunicipio.belongsTo(tcodestado, { as: "tcodestados", foreignKey: "estado_id"});
  tcodestado.hasMany(tcodmunicipio, { as: "tcodmunicipios", foreignKey: "estado_id"});
  tcodpostal.belongsTo(tcodestado, { as: "tcodestados", foreignKey: "estado_id"});
  tcodestado.hasMany(tcodpostal, { as: "tcodpostals", foreignKey: "estado_id"});
  tcodpostal.belongsTo(tcodmunicipio, { as: "tcodmunicipios", foreignKey: "municipio_id"});
  tcodmunicipio.hasMany(tcodpostal, { as: "tcodpostals", foreignKey: "municipio_id"});
  templeado_departamento.belongsTo(tdepartamento, { as: "departamento", foreignKey: "departamento_id"});
  tdepartamento.hasMany(templeado_departamento, { as: "templeado_departamentos", foreignKey: "departamento_id"});
  templeado_departamento.belongsTo(tpuesto, { as: "puesto", foreignKey: "puesto_id"});
  tpuesto.hasMany(templeado_departamento, { as: "templeado_departamentos", foreignKey: "puesto_id"});

  return {
    empleado,
    modulo,
    submodulo,
    tcodestado,
    tcodmunicipio,
    tcodpostal,
    tcompra,
    tcompras_detalle,
    tcontrato,
    tdepartamento,
    tdisenador,
    tdomicilio,
    templeado_departamento,
    tgenero,
    tml,
    tpaise,
    tproducto,
    tproveedor_domicilio,
    tproveedore,
    tpuesto,
    usuario
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
