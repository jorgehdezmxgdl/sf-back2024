const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('empleado', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    apellido_paterno: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    apellido_materno: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    fecha_nacimiento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    genero: {
      type: DataTypes.ENUM('F','M','X','N'),
      allowNull: true
    },
    curp: {
      type: DataTypes.STRING(18),
      allowNull: true,
      unique: "curp_UNIQUE"
    },
    numero_ss: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    rfc: {
      type: DataTypes.STRING(13),
      allowNull: true,
      unique: "rfc_UNIQUE"
    },
    imagen: {
      type: DataTypes.BLOB('long'),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(150),
      allowNull: true,
      unique: "email_UNIQUE"
    },
    telef_casa: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    telef_mobile: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    emergencia: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    telef_emergencia: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    estado_civil: {
      type: DataTypes.ENUM('S','C','D','V','U','O'),
      allowNull: true
    },
    tipo_sangre: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    activo: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    edicion: {
      type: DataTypes.TINYINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'empleados',
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
        name: "curp_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "curp" },
        ]
      },
      {
        name: "rfc_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "rfc" },
        ]
      },
      {
        name: "email_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "email" },
        ]
      },
    ]
  });
};
