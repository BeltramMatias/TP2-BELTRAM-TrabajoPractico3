const express = require('express');
const controlador = require('../controlador/libros.js');

const router = express.Router()

router.get('/:id?', controlador.obtenerLibros)
router.post('/', controlador.guardarLibro)
router.put('/:id', controlador.actualizarLibro)
router.delete('/:id', controlador.borrarLibro)


module.exports = router;



