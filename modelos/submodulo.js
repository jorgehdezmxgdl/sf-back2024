const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('submodulo', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    modulo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'modulos',
        key: 'id'
      }
    },
    nombre: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    adicionar: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    eliminar: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    consultar: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    modificar: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    activo: {
      type: DataTypes.TINYINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'submodulos',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "submod-modupk_idx",
        using: "BTREE",
        fields: [
          { name: "modulo" },
        ]
      },
    ]
  });
};
