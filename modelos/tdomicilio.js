const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tdomicilio', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    empleado_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'empleados',
        key: 'id'
      }
    },
    domicilio: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cp: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    colonia: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    municipio: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pais: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    activo: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'tdomicilios',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
          { name: "empleado_id" },
        ]
      },
      {
        name: "domemp_fk",
        using: "BTREE",
        fields: [
          { name: "empleado_id" },
        ]
      },
    ]
  });
};
