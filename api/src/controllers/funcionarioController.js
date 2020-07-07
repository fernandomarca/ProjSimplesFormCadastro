const Funcionario = require('../models/funcionario.Models');

//metodo para criar um nova(o) 'funcionario'

exports.create = (req, res) => {
  //validar campos
  if (!req.body.nomeFuncionario && !req.body.cargo && !req.body.numeroIdentificador) {
    return res.status(400).send({
      message: 'Os campos não podem estar vazios'
    });
  }

  //criando um novo funcionario
  const funcionario = new Funcionario({
    nomeFuncionario: req.body.nomeFuncionario,
    cargo: req.body.cargo,
    numeroIdentificador: req.body.numeroIdentificador,
  })
  //salvando os dados do funcionario
  funcionario.save()
    .then((data) => {
      res.status(200).send(data);
    }).catch((err) => {
      res.status(500).send({
        message: 'Erro ao criar um novo(a) funcionário(a)' || err.message
      })
    })
}

//metodo para selecionar todos os func.
exports.findAll = (req, res) => {
  Funcionario.find()
    .then((funcionarios) => {
      res.status(200).send(funcionarios);
    }).catch((err) => {
      res.status(500).send({
        message: 'Erro ao selecionar todos os funcionarios(as)' || err.message
      });
    });
};

//metodo resp. por selecionar funcionario pelo Id:
exports.findById = (req, res) => {
  Funcionario.findById(req.params.id)
    .then((funcionario) => {

      if (!funcionario) {
        return res.status(404).send({
          message: `Funcionario não encontrado ${req.params.id}`
        });
      }

      res.status(200).send(funcionario);

    }).catch((err) => {
      if (err.kind == 'ObjectId') {
        return res.status(400).send({
          message: `Id do funcionario não encontrado ${req.params.id}`
        })
      }

      res.status(500).send({
        message: 'erro ao selecionar o funcionario' || err.message
      })
    })
}

//metodo resp. por atualizar um funcionario
exports.update = (req, res) => {
  //validar campos
  if (!req.body.nomeFuncionario) {
    return res.status(400).send({
      message: 'Os campos nao podem ser vazios'
    })
  }

  //encontrar o Id funcionario e depois atualizar os dados via request
  Funcionario.findByIdAndUpdate(req.params.id, {
      nomeFuncionario: req.body.nomeFuncionario,
      cargo: req.body.cargo,
      numeroIdentificador: req.body.numeroIdentificador,
    }, {
      new: true
    })
    .then((funcionario) => {
      if (!funcionario) {
        res.status(404).send({
          message: `Funcionario não encontrado ${req.params.id}`
        })
      }

      res.status(200).send({
        message: 'funcionario atualizado com sucesso!',
        funcionario
      })

    }).catch((err) => {
      if (err.kind == 'ObjectId') {
        return res.status(404).send({
          message: `erro ao encontrar o Ido do funcionario ${res.params.id}`
        })
      }

      res.status(500).send({
        message: `erro ao atualizar os dados do funcionario ${req.params.id}`
      })
    })
}

//metodo resp. por excluir funcionario por id
exports.delete = (req, res) => {
  Funcionario.findByIdAndDelete(req.params.id)
    .then((funcionario) => {
      if (!funcionario) {
        return res.status(404).send({
          message: `id do funcionario não encontrado ${req.params.id}`
        });
      }

      res.status(200).send({
        message: 'funcionario excluido com sucesso!',
        funcionario
      })
    }).catch((err) => {
      if (err.kind == 'ObjectId') {
        return res.status(404).send({
          message: `O funcionario com Id ${req.params.id} não foi encontrado`
        })
      }
      return res.status(500).send({
        message: `erro ao excluir o funcionario ${req.params.id}`
      })
    })
}
