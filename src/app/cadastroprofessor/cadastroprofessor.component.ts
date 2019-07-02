import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastroprofessor',
  templateUrl: './cadastroprofessor.component.html',
  styleUrls: ['./cadastroprofessor.component.css']
})
export class CadastroprofessorComponent implements OnInit {
professor : Object;
 professores = [];
 nome: String;
 matricula: String;
 idade: Number;
 listidades = [];
 cadastrar() {
   this.professor = [this.nome, this.matricula, this.idade];
   this.professores.push(this.professor);
   this.listidades.push(this.idade);
 }
 Apagar(aux) {
   let posicao = this.professores.indexOf(aux);
   this.professores.splice(posicao,1);
 }
  constructor() { }

  ngOnInit() {
  }

}