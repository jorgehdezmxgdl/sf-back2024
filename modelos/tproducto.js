const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tproducto', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sku: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: "sku_UNIQUE"
    },
    nombre: {
      type: DataTypes.STRING(120),
      allowNull: true,
      unique: "nombre_UNIQUE"
    },
    disenador: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    alto: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    largo: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ancho: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    volumen: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    peso: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    mercancia_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    genero_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tipo_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    presentacion_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ml_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pais_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    minimo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    maximo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    constante_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    activo: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'tproductos',
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
        name: "sku_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "sku" },
        ]
      },
      {
        name: "nombre_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nombre" },
        ]
      },
    ]
  });
};
