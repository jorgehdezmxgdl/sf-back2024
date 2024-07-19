const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tlicitacione', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fechaini: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fechafin: {
      type: DataTypes.DATE,
      allowNull: true
    },
    lunes: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    martes: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    miercoles: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    jueves: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    viernes: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    sabado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    domingo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    duracion: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    },
    terminado: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    activo: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'tlicitaciones',
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
