

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ titulo }}</h1>

    <h3>
      La base es: <strong> {{ base }} </strong>
    </h3>

    <button (click)="acumulate(base)">+{{ base }}</button>
    <span> {{ numero }} </span>
    <button (click)="acumulate(-base)">-{{ base }}</button>
  `,
  styles: [``],
})
export class ContadorComponent implements OnInit {
  titulo: string = 'Contador App';
  numero: number = 10;
  base: number = 5;

  acumulate(value: number) {
    this.numero += value;
  }

  constructor() {}

  ngOnInit(): void {}
}
