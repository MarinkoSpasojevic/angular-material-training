import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class MaterialModule { }
