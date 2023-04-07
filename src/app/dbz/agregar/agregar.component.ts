import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent {

  constructor(private dbzService: DbzService) {
  }


  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  // @Output() onNewCharacter: EventEmitter<Personaje> = new EventEmitter<Personaje>();

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    this.dbzService.agregarPersonaje(this.nuevo);
    // this.onNewCharacter.emit(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0,
    };
  }
}
