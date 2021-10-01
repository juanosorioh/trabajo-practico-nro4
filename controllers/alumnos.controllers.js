const crltHome = {}
const Alumno = require('../models/alumnos.models');

crltHome.getAlumnos = async(req, res) =>{
    try{
        const allAlumnos = await Alumno.find()
        res.json(allAlumnos)
    } catch (error) {
        console.log('error en getUsers',error)
    }
}

crltHome.postAlumnos = async (req, res) => {

    const {
      nombre,
      apellido,
      cuil,
      aficiones,
      experiencia_laboral,
      conocimientos,
      habilidades,
      link_github
    } = req.body;
    try {
      const alumno = new Alumno({
        nombre,
        apellido,
        cuil,
        aficiones,
        experiencia_laboral,
        conocimientos,
        habilidades,
        link_github
      });    
      await alumno.save();
      res.json({
        alumno
      });
    } catch (error) {
      console.log("Error al crear un nuevo usuario: ", error);
      res.status(500).json({ msg: "Error al crear nuevo usuario" });
    }
  };

module.exports=crltHome