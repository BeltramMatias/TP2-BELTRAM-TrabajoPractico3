const fs = require('fs');

const nombreArchivo = 'libros.json'

const leerArchivo = nombre => {
    let libros = []
    try {
        libros = JSON.parse(fs.readFileSync(nombre, 'utf-8'))
    }
    catch {}

    return libros
}

const escribirArchivo  = (nombre, libros) => {
    fs.writeFileSync(nombre, JSON.stringify(libros,null,'\t'))
}

const obtenerLibros = id => {    
    try {
        const libros = leerArchivo(nombreArchivo)
        if(id) {
            const libro = libros.find( libro => libro.id === id )
            return libro || {}
        }
        else {
            return libros
        }
    }
    catch {
        return id? {} : []
    }
}

const guardarLibro = libro => {
    const libros = leerArchivo(nombreArchivo)

    libro.id = String(parseInt(libros[libros.length - 1]?.id || 0) + 1)
    libro.titulo = String(libro.titulo)
    libro.autor = String(libro.autor)
    libro.anio = Number(libro.anio)
    libros.push(libro)

    escribirArchivo(nombreArchivo, libros)

    return libro
}

const actualizarLibro = (id, libro) => {
    libro.id = id

    const libros = leerArchivo(nombreArchivo)

    const index = libros.findIndex( libro => libro.id === id )
    if(index != -1) {
        const libroAnt = libros[index]
        const libroNuevo = { ...libroAnt, ...libro }
        libros.splice(index,1,libroNuevo)
        escribirArchivo(nombreArchivo, libros)

        return libroNuevo
    }
    else {
        libros.push(libro)
        escribirArchivo(nombreArchivo, libros)

        return libro
    }
}

const borrarLibro = id => {
    let libro = {}

    const libros = leerArchivo(nombreArchivo)

    const index = libros.findIndex( libro => libro.id === id )
    if(index != -1) {
        libro = libros.splice(index,1)[0]
        escribirArchivo(nombreArchivo, libros)
    }
    return libro    
}


module.exports = {
    obtenerLibros,
    guardarLibro,
    actualizarLibro,
    borrarLibro
};