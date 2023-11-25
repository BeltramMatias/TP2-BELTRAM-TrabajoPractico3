const model = require('../model/librosFile.js');


const obtenerLibros = id => {
    const libros = model.obtenerLibros(id)
    return libros
}   

const guardarLibro = libro => {
    const libroGuardado = model.guardarLibro(libro)
    return libroGuardado
}

const actualizarLibro = (id, libro) => {
    const libroActualizado = model.actualizarLibro(id,libro)
    return libroActualizado
}

const borrarLibro = id => {
    const libroBorrado = model.borrarLibro(id)
    return libroBorrado
}


module.exports = {
    obtenerLibros,
    guardarLibro,
    actualizarLibro,
    borrarLibro
};