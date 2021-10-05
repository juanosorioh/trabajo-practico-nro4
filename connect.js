const mongoose = require('mongoose');
require('dotenv').config()
const conectardb = ()=>{
mongoose.connect(process.env.ATLA|| 'mongodb://localhost/bd-tp4')
.then(()=>console.log('bd conectada'))
.catch((err)=>console.log('fallo la conexion',err))}

module.exports=conectardb