const express = require('express')
const estudianteController= require('../controller/EstudianteController')


const router = express.Router();

router.get('/',estudianteController.getEstudiante)
router.post('/',estudianteController.postEstudiante)
router.put('/:idestudiante',estudianteController.putEstudiante)
router.delete('/:idestudiante',estudianteController.deleteEstudiante)

router.get('/estudianteasignatura',estudianteController.getEstudianteAsignatura)


module.exports=router;