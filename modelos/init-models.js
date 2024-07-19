var DataTypes = require("sequelize").DataTypes;
var _empleado = require("./empleado");
var _modulo = require("./modulo");
var _submodulo = require("./submodulo");
var _talmacene = require("./talmacene");
var _talmacenubicacione = require("./talmacenubicacione");
var _tbanco = require("./tbanco");
var _tcatalogonota = require("./tcatalogonota");
var _tcodestado = require("./tcodestado");
var _tcodmunicipio = require("./tcodmunicipio");
var _tcodpostal = require("./tcodpostal");
var _tcompra = require("./tcompra");
var _tcompras_detalle = require("./tcompras_detalle");
var _tcompras_embarque = require("./tcompras_embarque");
var _tcompras_recomendacion = require("./tcompras_recomendacion");
var _tconstante = require("./tconstante");
var _tcontenedore = require("./tcontenedore");
var _tdepartamento = require("./tdepartamento");
var _tdisenador = require("./tdisenador");
var _tdomicilio = require("./tdomicilio");
var _templeado_departamento = require("./templeado_departamento");
var _tfaltante = require("./tfaltante");
var _tformapago = require("./tformapago");
var _tgenero = require("./tgenero");
var _timagene = require("./timagene");
var _tlicitacione = require("./tlicitacione");
var _tml = require("./tml");
var _tnota = require("./tnota");
var _tpaise = require("./tpaise");
var _tpresentacione = require("./tpresentacione");
var _tproducto = require("./tproducto");
var _tproductos_imagen = require("./tproductos_imagen");
var _tproveedor_domicilio = require("./tproveedor_domicilio");
var _tproveedore = require("./tproveedore");
var _tpuesto = require("./tpuesto");
var _tsatimpuesto = require("./tsatimpuesto");
var _ttipo = require("./ttipo");
var _tubicacione = require("./tubicacione");
var _usuario = require("./usuario");

function initModels(sequelize) {
  var empleado = _empleado(sequelize, DataTypes);
  var modulo = _modulo(sequelize, DataTypes);
  var submodulo = _submodulo(sequelize, DataTypes);
  var talmacene = _talmacene(sequelize, DataTypes);
  var talmacenubicacione = _talmacenubicacione(sequelize, DataTypes);
  var tbanco = _tbanco(sequelize, DataTypes);
  var tcatalogonota = _tcatalogonota(sequelize, DataTypes);
  var tcodestado = _tcodestado(sequelize, DataTypes);
  var tcodmunicipio = _tcodmunicipio(sequelize, DataTypes);
  var tcodpostal = _tcodpostal(sequelize, DataTypes);
  var tcompra = _tcompra(sequelize, DataTypes);
  var tcompras_detalle = _tcompras_detalle(sequelize, DataTypes);
  var tcompras_embarque = _tcompras_embarque(sequelize, DataTypes);
  var tcompras_recomendacion = _tcompras_recomendacion(sequelize, DataTypes);
  var tconstante = _tconstante(sequelize, DataTypes);
  var tcontenedore = _tcontenedore(sequelize, DataTypes);
  var tdepartamento = _tdepartamento(sequelize, DataTypes);
  var tdisenador = _tdisenador(sequelize, DataTypes);
  var tdomicilio = _tdomicilio(sequelize, DataTypes);
  var templeado_departamento = _templeado_departamento(sequelize, DataTypes);
  var tfaltante = _tfaltante(sequelize, DataTypes);
  var tformapago = _tformapago(sequelize, DataTypes);
  var tgenero = _tgenero(sequelize, DataTypes);
  var timagene = _timagene(sequelize, DataTypes);
  var tlicitacione = _tlicitacione(sequelize, DataTypes);
  var tml = _tml(sequelize, DataTypes);
  var tnota = _tnota(sequelize, DataTypes);
  var tpaise = _tpaise(sequelize, DataTypes);
  var tpresentacione = _tpresentacione(sequelize, DataTypes);
  var tproducto = _tproducto(sequelize, DataTypes);
  var tproductos_imagen = _tproductos_imagen(sequelize, DataTypes);
  var tproveedor_domicilio = _tproveedor_domicilio(sequelize, DataTypes);
  var tproveedore = _tproveedore(sequelize, DataTypes);
  var tpuesto = _tpuesto(sequelize, DataTypes);
  var tsatimpuesto = _tsatimpuesto(sequelize, DataTypes);
  var ttipo = _ttipo(sequelize, DataTypes);
  var tubicacione = _tubicacione(sequelize, DataTypes);
  var usuario = _usuario(sequelize, DataTypes);

  tdomicilio.belongsTo(empleado, { as: "empleado", foreignKey: "empleado_id"});
  empleado.hasMany(tdomicilio, { as: "tdomicilios", foreignKey: "empleado_id"});
  templeado_departamento.belongsTo(empleado, { as: "empleado", foreignKey: "empleado_id"});
  empleado.hasMany(templeado_departamento, { as: "templeado_departamentos", foreignKey: "empleado_id"});
  usuario.belongsTo(empleado, { as: "empleado", foreignKey: "empleado_id"});
  empleado.hasMany(usuario, { as: "usuarios", foreignKey: "empleado_id"});
  submodulo.belongsTo(modulo, { as: "modulo_modulo", foreignKey: "modulo"});
  modulo.hasMany(submodulo, { as: "submodulos", foreignKey: "modulo"});
  tcodmunicipio.belongsTo(tcodestado, { as: "estado", foreignKey: "estado_id"});
  tcodestado.hasMany(tcodmunicipio, { as: "tcodmunicipios", foreignKey: "estado_id"});
  tcodpostal.belongsTo(tcodestado, { as: "estado", foreignKey: "estado_id"});
  tcodestado.hasMany(tcodpostal, { as: "tcodpostals", foreignKey: "estado_id"});
  tcodpostal.belongsTo(tcodmunicipio, { as: "municipio", foreignKey: "municipio_id"});
  tcodmunicipio.hasMany(tcodpostal, { as: "tcodpostals", foreignKey: "municipio_id"});
  templeado_departamento.belongsTo(tdepartamento, { as: "departamento", foreignKey: "departamento_id"});
  tdepartamento.hasMany(templeado_departamento, { as: "templeado_departamentos", foreignKey: "departamento_id"});
  tcatalogonota.belongsTo(tnota, { as: "notum", foreignKey: "nota_id"});
  tnota.hasMany(tcatalogonota, { as: "tcatalogonota", foreignKey: "nota_id"});
  templeado_departamento.belongsTo(tpuesto, { as: "puesto", foreignKey: "puesto_id"});
  tpuesto.hasMany(templeado_departamento, { as: "templeado_departamentos", foreignKey: "puesto_id"});

  return {
    empleado,
    modulo,
    submodulo,
    talmacene,
    talmacenubicacione,
    tbanco,
    tcatalogonota,
    tcodestado,
    tcodmunicipio,
    tcodpostal,
    tcompra,
    tcompras_detalle,
    tcompras_embarque,
    tcompras_recomendacion,
    tconstante,
    tcontenedore,
    tdepartamento,
    tdisenador,
    tdomicilio,
    templeado_departamento,
    tfaltante,
    tformapago,
    tgenero,
    timagene,
    tlicitacione,
    tml,
    tnota,
    tpaise,
    tpresentacione,
    tproducto,
    tproductos_imagen,
    tproveedor_domicilio,
    tproveedore,
    tpuesto,
    tsatimpuesto,
    ttipo,
    tubicacione,
    usuario,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
