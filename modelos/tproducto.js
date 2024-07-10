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
      type: DataTypes.STRING(200),
      allowNull: true,
      unique: "sku_UNIQUE"
    },
    nombre: {
      type: DataTypes.STRING(120),
      allowNull: true,
      unique: "nombre_UNIQUE"
    },
    barcode: {
      type: DataTypes.STRING(100),
      allowNull: true
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
    genero: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tipo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    presentacion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ml: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pais: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    almacen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ubicacion: {
      type: DataTypes.STRING(45),
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
    notascorazon: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    notasfondo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    notassalida: {
      type: DataTypes.STRING(255),
      allowNull: true
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
