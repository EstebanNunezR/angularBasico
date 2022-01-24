import { componentFactoryName } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //este es el nombre de este Componente
  templateUrl: './app.component.html',// este es el html que queremos que se muestre, es el de nuestro componente
  styleUrls: ['./app.component.css']// este es el estilo del html, se aplica solo a este componente
})
export class AppComponent {
  titulo: string = 'Contador App';
  numero: number = 10;
  base  : number = 5;
  acumular(valor:number){
    this.numero += valor;
  }
  
}

//NOTA:

//el component.ts  "une el componente" el selector va a ser el nombre de todo lo que se unio, luego ese nombre
// de selector es el que va en el html pricipal del proyecto para que asi se desplieque, de esta manera 
//podemos trabajar varios componentes por aparte que al final se unen en un mismo html global