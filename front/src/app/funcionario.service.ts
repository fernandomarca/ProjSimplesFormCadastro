import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FuncionarioService {
  uri = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  //metodo resp. por add novo func. btn func.
  adicionarFuncionario(
    nomeFuncionario: String,
    cargo: String,
    numeroIdentificador: Number
  ) {
    const objFuncionario = {
      nomeFuncionario,
      cargo,
      numeroIdentificador,
    };

    console.log(objFuncionario);

    //post url back-end http://localhost:8000/api/funcionarios
    return this.http
      .post(`${this.uri}/funcionarios`, objFuncionario)
      .subscribe((res) => console.log('feito'));
  }

  /**
   * metodo para selecionar os func.
   */
  getFuncionarios() {
    return this.http.get(`${this.uri}/funcionarios`);
  }
}
