const Funcionario = require("../models/funcionario.Models");
const {
  Error
} = require("mongoose");

//metodo para criar um nova(o) 'funcionario'

exports.create = async (req, res) => {
  const novoFuncionario = new Funcionario(req.body);
  const funcionario = await novoFuncionario.save();
  return res.status(201).send({
    message: "funcionario criado com sucesso",
    funcionario,
  });
};

//metodo para selecionar todos os func.
exports.findAll = async (req, res) => {
  const funcionarios = await Funcionario.find({});
  return res.status(200).send(funcionarios);
};

//metodo resp. por selecionar funcionario pelo Id:
exports.findById = async (req, res) => {
  const funcionario = await Funcionario.findById(req.params.id);
  if (!funcionario) {
    return res.status(404).send({
      message: `Funcionario não encontrado ${req.params.id}`,
    });
  }
  return res.status(200).send(funcionario);
};

//metodo resp. por atualizar um funcionario
exports.update = async (req, res) => {
  //validar campos vazios:
  if (!req.body.nomeFuncionario || !req.body.cargo || !req.body.numeroIdentificador) {
    return res.status(400).send({
      message: 'Os campos não podem ser vazios'
    })
  }

  const funcionario = await Funcionario.findByIdAndUpdate(req.params.id, req.body);

  if (!funcionario) {
    return res.status(401).send({
      message: 'Funcionario nao encontrado',
      funcionario
    });
  }
  //console.log(funcionario) tratar CastError

  return res.status(200).send({
    message: 'funcionario atualizado com sucesso',
    funcionario
  })
}

//metodo resp. por excluir funcionario por id
exports.delete = async (req, res) => {
  const funcionario = await Funcionario.findByIdAndDelete(req.params.id)

  if (!funcionario) {
    return res.status(404).send({
      message: `id do funcionario não encontrado ${req.params.id}`,
    });
  }

  return res.status(200).send({
    message: "funcionario excluido com sucesso!",
    funcionario,
  });

};
