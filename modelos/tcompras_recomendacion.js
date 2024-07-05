const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tcompras_recomendacion', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    folio: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    total_venta: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    total_compra: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ganancia: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    porcentaje_utilidad: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tcompras_recomendacion',
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
