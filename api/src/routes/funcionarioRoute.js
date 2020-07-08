/**
 * Responsavel pelas rotas da api relacionado ao funcionario
 */

//const express = require('express');

const router = require('express-promise-router')();

const funcionarioController = require('../controllers/funcionarioController');

//definir as rotas do crud funcionario

//rota localhost:8000/funcionario/create
router.post('/create', funcionarioController.create);

//rota para selecionar todos os func.
router.get('/findAll', funcionarioController.findAll);

//rota resp. por selecionar o funcionario pelo ID
//localhost:8000/api/funcionario/:id
router.get('/funcionario/:id', funcionarioController.findById);

//rota resp. por atualizar funcionario pelo ID
//localhost:8000/api/funcionario/:id
router.put('/funcionario/:id', funcionarioController.update);

//roata resp. por deletar funcionario pelo Id
//localhost:8000/api/funcionario/:id
router.delete('/funcionario/:id', funcionarioController.delete);

module.exports = router;
