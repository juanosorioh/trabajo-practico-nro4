const {model, Schema} = require('mongoose');

const AlumnoSchema = new Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true},
    cuil: { type: Number, required: true },
    aficiones: { type: String},
    experiencia_laboral: { type: String, required: true },
    conocimientos: { type: String, required: true },
    habilidades: { type: String, required: true },
    link_github: { type: String, required: true }
})

module.exports = model('Alumno', AlumnoSchema);