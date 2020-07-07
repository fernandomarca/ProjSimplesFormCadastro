import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FuncionarioService {
  uri = '/funcionario';

  constructor(private http: HttpClient) {}

  //metodo resp. por add novo func. btn func.
  adicionarFuncionario(
    nomeFuncionario: String,
    cargo: String,
    numeroIdentificador: Number
  ) {
    const objFuncionario = {
      nomeFuncionario: nomeFuncionario,
      cargo: cargo,
      numeroIdentificador: numeroIdentificador,
    };

    console.log(objFuncionario);
    this.http
      .post(`${this.uri}/add`, objFuncionario)
      .subscribe((res) => console.log('ok'));
  }
}
