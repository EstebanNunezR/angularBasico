import { Component } from '@angular/core';


@Component({

    selector:'app-contador',
    template:`
            <h1>{{titulo}}</h1>
            <!-- en este caso las llaves nos dan acceso a las "variables" que tenemos en nuestro.ts -->
            <!--<h1>{{1+1}}</h1>
            estas llaves nos permiten escribir codigo directo de javaS-->
            <h3>la base es: <strong>{{ base }}</strong></h3>
            
            <button (click)="acumular(base)"> + {{ base }}</button>
            <!--los eventos son definidos con parentesis -->
            <span> {{numero}} </span>
            <button (click)="acumular(-base)"> - {{ base }}</button>`

})

export class ContadorComponent {
    titulo: string = 'Contador App';
    numero: number = 10;
    base  : number = 5;
    acumular(valor:number){
      this.numero += valor;
    }
    
  }