import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
  //template:"<p>Este es un empleado :3!</p>",
  //styles:["p{background-color:red;}"]
})
export class EmpleadoComponent {
  nombre="Juan";
  apellido="Díaz";
  edad=28;
  empresa="UD";
  /*getEdad(){
    return this.edad;
  }*/
}
