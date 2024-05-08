var DataTypes = require("sequelize").DataTypes;
var _empleado = require("./empleado");
var _modulo = require("./modulo");
var _submodulo = require("./submodulo");
var _tcodestado = require("./tcodestado");
var _tcodmunicipio = require("./tcodmunicipio");
var _tcodpostal = require("./tcodpostal");
var _tcontrato = require("./tcontrato");
var _tdepartamento = require("./tdepartamento");
var _tpuesto = require("./tpuesto");
var _usuario = require("./usuario");

function initModels(sequelize) {
  var empleado = _empleado(sequelize, DataTypes);
  var modulo = _modulo(sequelize, DataTypes);
  var submodulo = _submodulo(sequelize, DataTypes);
  var tcodestado = _tcodestado(sequelize, DataTypes);
  var tcodmunicipio = _tcodmunicipio(sequelize, DataTypes);
  var tcodpostal = _tcodpostal(sequelize, DataTypes);
  var tcontrato = _tcontrato(sequelize, DataTypes);
  var tdepartamento = _tdepartamento(sequelize, DataTypes);
  var tpuesto = _tpuesto(sequelize, DataTypes);
  var usuario = _usuario(sequelize, DataTypes);

  usuario.belongsTo(empleado, { as: "empleado", foreignKey: "empleado_id"});
  empleado.hasMany(usuario, { as: "usuarios", foreignKey: "empleado_id"});
  submodulo.belongsTo(modulo, { as: "modulo_modulo", foreignKey: "modulo"});
  modulo.hasMany(submodulo, { as: "submodulos", foreignKey: "modulo"});
  tcodestado.hasMany(tcodmunicipio, { as: "tcodmunicipios", foreignKey: "estado_id"});
  tcodestado.hasMany(tcodpostal, { as: "tcodpostales", foreignKey: "estado_id"});
  tcodpostal.belongsTo(tcodestado, { as: "tcodestados", foreignKey: "estado_id"});
  tcodpostal.belongsTo(tcodmunicipio, { as: "tcodmunicipios", foreignKey: "municipio_id"});
  tcodmunicipio.belongsTo(tcodestado, { as: "tcodestados", foreignKey: "estado_id"});
  tcodmunicipio.hasMany(tcodpostal, { as: "tcodpostales", foreignKey: "municipio_id"});

  return {
    empleado,
    modulo,
    submodulo,
    tcodestado,
    tcodmunicipio,
    tcodpostal,
    tcontrato,
    tdepartamento,
    tpuesto,
    usuario,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
