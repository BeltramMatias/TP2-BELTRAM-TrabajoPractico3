const servicio = require('../servicio/libros.js')


const obtenerLibros = (req,res) => {
    const { id } = req.params
    const libros = servicio.obtenerLibros(id)
    res.json(libros)
}

const guardarLibro = (req,res) => {
    const libro = req.body
    const libroGuardado = servicio.guardarLibro(libro)
    res.json(libroGuardado)
    //res.redirect('/')
}

const actualizarLibro = (req,res) => {
    const { id } = req.params
    const libro = req.body
    const libroActualizado = servicio.actualizarLibro(id, libro)
    res.json(libroActualizado)
}

const borrarLibro = (req,res) => {
    const { id } = req.params
    const libroBorrado = servicio.borrarLibro(id)
    res.json(libroBorrado)
}


module.exports = {
    obtenerLibros,
    guardarLibro,
    actualizarLibro,
    borrarLibro
};
