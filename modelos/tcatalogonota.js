const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tcatalogonota', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nota_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tnotas',
        key: 'id'
      }
    },
    nombre: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    activo: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'tcatalogonotas',
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
        name: "tcatalogonotas_tnotas_id_fk",
        using: "BTREE",
        fields: [
          { name: "nota_id" },
        ]
      },
    ]
  });
};
