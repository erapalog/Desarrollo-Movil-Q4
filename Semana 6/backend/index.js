const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000,()=>{
    console.log('Ejecutando en puerto 3000')
})

//Conexion BD
//controladores
//router
//modelos (sequelize)