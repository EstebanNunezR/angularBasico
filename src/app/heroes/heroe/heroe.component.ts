import { Component } from '@angular/core';

@Component({
    selector:'app-heroe',
    templateUrl: 'heroe.component.html',
})




export class HeroeComponent{

    nombre: string = 'Ironman';
    edad  : number = 45;

    get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre():string{
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre():void{//cual es la diferencia entre function y metodo?
        this.nombre = 'SpiderMan';
    }
    cambiarEdad():void{//cual es la diferencia entre function y metodo?
        this.edad = 50;
    }


}