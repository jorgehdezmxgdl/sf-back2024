const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('templeado_departamento', {
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
    departamento_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tdepartamentos',
        key: 'id'
      }
    },
    puesto_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tpuestos',
        key: 'id'
      }
    },
    es_jefe: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    salario: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    },
    fecha_ingreso: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fecha_renuncia: {
      type: DataTypes.DATE,
      allowNull: true
    },
    observaciones: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    activo: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'templeado_departamentos',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
          { name: "departamento_id" },
          { name: "empleado_id" },
          { name: "puesto_id" },
        ]
      },
      {
        name: "empl_fk",
        using: "BTREE",
        fields: [
          { name: "empleado_id" },
        ]
      },
      {
        name: "depar_fk",
        using: "BTREE",
        fields: [
          { name: "departamento_id" },
        ]
      },
      {
        name: "puesto_fk",
        using: "BTREE",
        fields: [
          { name: "puesto_id" },
        ]
      },
    ]
  });
};
