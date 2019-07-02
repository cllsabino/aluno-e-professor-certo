import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastroaluno',
  templateUrl: './cadastroaluno.component.html',
  styleUrls: ['./cadastroaluno.component.css']
})
export class CadastroalunoComponent implements OnInit {
aluno: Object;
 alunos = [];
 nome: String;
 matricula: String;
 idade: Number;
 listidades = [];
 cadastrar() {
   this.aluno = [this.nome, this.matricula, this.idade];
   this.alunos.push(this.aluno);
   this.listidades.push(this.idade);
 }
 Apagar(aux) {
   let posicao = this.alunos.indexOf(aux);
   this.alunos.splice(posicao,1);
 }
  constructor() { }

  ngOnInit() {
  }

}