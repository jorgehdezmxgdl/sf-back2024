const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tcompras_detalle', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    compra_id: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    producto_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    precio: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    completo: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'tcompras_detalle',
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
