/**
 * Responsavel pelas rotas da api relacionado ao funcionario
 */

const router = require('express-promise-router')();

const funcionarioController = require('../controllers/funcionarioController');

//definir as rotas do crud funcionario

//rota localhost:8000/funcionario/create
router.post('/funcionarios', funcionarioController.create);

//rota para selecionar todos os func.
router.get('/funcionarios', funcionarioController.findAll);

//rota resp. por selecionar o funcionario pelo ID
//localhost:8000/api/funcionario/:id
router.get('/funcionarios/:id', funcionarioController.findById);

//rota resp. por atualizar funcionario pelo ID
//localhost:8000/api/funcionario/:id
router.put('/funcionarios/:id', funcionarioController.update);

//roata resp. por deletar funcionario pelo Id
//localhost:8000/api/funcionario/:id
router.delete('/funcionarios/:id', funcionarioController.delete);

module.exports = router;
