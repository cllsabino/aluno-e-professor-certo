import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(private router : Router){

  }
  navegarA(){
    this.router.navigate(['/alunoC']);
  }
  navegarP(){
    this.router.navigate(['/professorC']);
  }
}
