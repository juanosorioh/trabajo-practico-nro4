const router = require('express').Router();
const {postAlumnos, getAlumnos}=require('../controllers/alumnos.controllers');

router.get('/alumnos', getAlumnos);
router.post('/alumnos', postAlumnos);
module.exports=router