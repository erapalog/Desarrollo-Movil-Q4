

const { DataTypes } = require('sequelize')
const sequelize = require('../bd/database')

const AsignaturaEstudiante = sequelize.define('Estudiante', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    idestudiante: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idasignatura: {
        type: DataTypes.INTEGER

    }
},
    {
        tableName: 'Estudiante',
        timestamps: false
    }
)

module.exports= AsignaturaEstudiante;