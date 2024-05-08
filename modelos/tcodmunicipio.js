const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tcodmunicipio', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Referencia única"
    },
    estado_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Referencia del estado",
      references: {
        model: 'tcodestados',
        key: 'id'
      }
    },
    municipio: {
      type: DataTypes.STRING(150),
      allowNull: false,
      comment: "Nombre del municipio"
    }
  }, {
    sequelize,
    tableName: 'tcodmunicipios',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
          { name: "estado_id" },
        ]
      },
      {
        name: "fk_cat_municipios_cat_estados1_idx",
        using: "BTREE",
        fields: [
          { name: "estado_id" },
        ]
      },
    ]
  });
};
