
const { DataTypes } = require('sequelize')
const sequelize = require('../bd/database')
const AsignaturaEstudiante = require('./AsignaturaEstudiante')
const Estudiante = require('./Estudiante')

const Asignatura = sequelize.define('Asignatura', {
    idasignatura: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estado: {
        type: DataTypes.INTEGER,
        allowNull: false

    },
},
{
    tableName: 'Asignatura',
    timestamps: false, // Desactiva las columnas createdAt y updatedAt
  }

)

Asignatura.associate = (models) => {
    Asignatura.belongsToMany(models.Estudiante, {
      through: models.AsignaturaEstudiante,
      foreignKey: 'idasignatura',
    });
  };
  

module.exports=Asignatura;
