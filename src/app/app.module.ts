import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CadastroalunoComponent } from './cadastroaluno/cadastroaluno.component';
import { CadastroprofessorComponent } from './cadastroprofessor/cadastroprofessor.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes : Routes = [
 {path : 'alunoC', component : CadastroalunoComponent},
 {path : 'professorC', component : CadastroprofessorComponent}
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, HelloComponent, CadastroalunoComponent, CadastroprofessorComponent ],
  bootstrap:    [ AppComponent ],
  exports: [RouterModule]
})
export class AppModule { }
