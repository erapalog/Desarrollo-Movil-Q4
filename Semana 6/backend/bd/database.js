const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('universidad','root','admin123',{
    host:'localhost',
    dialect:'mysql'
})

module.exports=sequelize;