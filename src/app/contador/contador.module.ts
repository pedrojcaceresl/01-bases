import { ContadorComponent } from './contador/contador.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ContadorComponent],
  imports: [CommonModule],
  exports: [ContadorComponent],
})
export class ContadorModule {}
