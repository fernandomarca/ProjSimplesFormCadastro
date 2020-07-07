/**
 * responsavel pelo modelo da classe Funcionario da aplicação
 * classe funcionario
 * id:(number-guid gerado pelo mongodb)
 * nomeFuncionario:String
 * cargo:String
 * numeroIdentificador:Number
 */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const funcionarioSchema = new Schema({
  nomeFuncionario: {
    type: String,
    required: true,
    maxlength: 50
  },
  cargo: {
    type: String,
    required: true,
    maxlength: 30
  },
  numeroIdentificador: {
    type: Number,
    required: true,
  },
}, {
  timestamps: true,
  collection: 'funcionario',
})

module.exports = mongoose.model('Funcionario', funcionarioSchema);
