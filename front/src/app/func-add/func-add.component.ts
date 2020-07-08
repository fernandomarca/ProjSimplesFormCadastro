import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FuncionarioService } from '../funcionario.service';
import Funcionario from '../Funcionario';

@Component({
  selector: 'app-func-add',
  templateUrl: './func-add.component.html',
  styleUrls: ['./func-add.component.css'],
})
export class FuncAddComponent implements OnInit {
  adicionarFuncionarioForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private funcionarioService: FuncionarioService
  ) {
    this.createForm();
  }

  createForm() {
    this.adicionarFuncionarioForm = this.formBuilder.group({
      nomeFuncionario: ['', Validators.required],
      cargo: ['', Validators.required],
      numeroIdentificador: ['', Validators.required],
    });
  }

  /**
   * metodo resp. para add novo func. com btn add. func.
   */
  adicionarFuncionario(
    nomeFuncionario: String,
    cargo: String,
    numeroIdentificador: Number
  ) {
    this.funcionarioService.adicionarFuncionario(
      nomeFuncionario,
      cargo,
      numeroIdentificador
    );
  }
  funcionarios: Funcionario[];
  ngOnInit(): void {
    this.funcionarioService
      .getFuncionarios()
      .subscribe((data: Funcionario[]) => {
        this.funcionarios = data;
      });
  }
}
