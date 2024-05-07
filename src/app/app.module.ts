import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './Components/vistas/login/login.component';
import {LayoutModule} from '@angular/cdk/layout';
import { OverlayModule } from '@angular/cdk/overlay';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    LayoutModule,
    OverlayModule,
    ReactiveFormsModule
  ]
})
export class AppModule { }
