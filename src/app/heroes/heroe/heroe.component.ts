import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {
  nombre: string = 'Ironman';
  edad: number = 45;

  getNombre(): string {
    return `${ this.nombre } - ${this.edad}`;
  }

  get nombreCapitalizado() {
    return this.nombre.toUpperCase();
  }

  changeName(): void {
    this.nombre = 'Spiderman';
  }

  changeAge(): void {
    this.edad = 30;
  }

}
