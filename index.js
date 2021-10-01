
const express = require('express');
const morgan = require('morgan');
const conectardb = require('./connect');
const helmet = require('helmet');
const app = express();
conectardb()
//configuracion del puerto
const PORT =process.env.PORT || 4000;

//middlewares
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use('/',require('./routes/alumnos.routes'));

app.listen(PORT, ()=>{console.log(`escuchando en el puerto: ${PORT}`)});