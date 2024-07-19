const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbanco', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    clave: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    nombre_corto: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    razon_social: {
      type: DataTypes.STRING(140),
      allowNull: true
    },
    activo: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'tbancos',
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
    ]
  });
};
