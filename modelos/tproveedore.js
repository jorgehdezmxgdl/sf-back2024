const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tproveedore', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    empresa: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    rfc: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    fiscal_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    curp: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    domicilio: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    interior: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    exterior: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    cp: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    colonia_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    municipio_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    estado_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pais_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    clasificacion_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tipo_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    activo: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'tproveedores',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
          { name: "colonia_id" },
          { name: "municipio_id" },
          { name: "estado_id" },
          { name: "pais_id" },
          { name: "clasificacion_id" },
          { name: "tipo_id" },
        ]
      },
    ]
  });
};
