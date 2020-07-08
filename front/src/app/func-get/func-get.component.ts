import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../funcionario.service';
import Funcionario from '../Funcionario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-func-get',
  templateUrl: './func-get.component.html',
  styleUrls: ['./func-get.component.css'],
})
export class FuncGetComponent implements OnInit {
  constructor(private funcionarioService: FuncionarioService) {}
  funcionarios: Funcionario[];

  ngOnInit() {
    this.funcionarioService
      .getFuncionarios()
      .subscribe((data: Funcionario[]) => {
        this.funcionarios = data;
      });
  }
}
