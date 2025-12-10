const { Router } = require('express');

const CursoController = require('../src/controllers/getCadastraCurso');

const router = new Router();

router.get('/:id', CursoController.index);

module.exports = router;