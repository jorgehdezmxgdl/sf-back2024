const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuario', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    clave: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: "clave_UNIQUE"
    },
    passwd: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    empleado_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'empleados',
        key: 'id'
      }
    },
    activo: {
      type: DataTypes.TINYINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'usuarios',
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
        name: "clave_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "clave" },
        ]
      },
      {
        name: "user_emplofk_idx",
        using: "BTREE",
        fields: [
          { name: "empleado_id" },
        ]
      },
    ]
  });
};
