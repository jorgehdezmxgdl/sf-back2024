const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tcompras_embarque', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    folio: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    fecha_pedido: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fecha_estimadaentrega: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fecha_entrega: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cumplimiento: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    completo: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    observaciones: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tcompras_embarques',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
