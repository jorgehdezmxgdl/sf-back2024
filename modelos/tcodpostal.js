const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tcodpostal', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      comment: "Identificador Ãºnico"
    },
    municipio_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "Referencia de municipio",
      references: {
        model: 'tcodmunicipios',
        key: 'id'
      }
    },
    estado_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "Referencia del estado",
      references: {
        model: 'tcodestados',
        key: 'id'
      }
    },
    cp: {
      type: DataTypes.MEDIUMINT,
      allowNull: false,
      comment: "CÃ³digo postal"
    },
    colonia: {
      type: DataTypes.STRING(150),
      allowNull: false,
      comment: "Colonia"
    }
  }, {
    sequelize,
    tableName: 'tcodpostal',
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
        name: "fk_cat_cp_cat_municipios1_idx",
        using: "BTREE",
        fields: [
          { name: "municipio_id" },
        ]
      },
      {
        name: "fk_cat_cp_cat_estados1_idx",
        using: "BTREE",
        fields: [
          { name: "estado_id" },
        ]
      },
      {
        name: "cp",
        using: "BTREE",
        fields: [
          { name: "cp" },
        ]
      },
    ]
  });
};
