import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';

@Injectable({
  providedIn: 'root',
})
export class DbzService {

  private _personajes: Personaje[] = [
    {
      nombre: 'Krillin',
      poder: 700,
    },
    {
      nombre: 'Goku',
      poder: 15000,
    },
  ];

  get personajes(): Personaje[] {
    return [...this._personajes];
  }

  constructor() {
    console.log('Initialized service!');
  }

  agregarPersonaje(personaje: Personaje) {
    this._personajes.push(personaje);
  }
}
