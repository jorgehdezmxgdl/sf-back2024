const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tcodestado', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Referencia única"
    },
    estado: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Nombre del estado",
      unique: "estado_UNIQUE"
    }
  }, {
    sequelize,
    tableName: 'tcodestados',
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
      {
        name: "estado_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "estado" },
        ]
      },
    ]
  });
};
