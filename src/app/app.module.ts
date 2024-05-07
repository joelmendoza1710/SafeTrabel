import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './Components/vistas/login/login.component';
import {LayoutModule} from '@angular/cdk/layout';
import { OverlayModule } from '@angular/cdk/overlay';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    OverlayModule
  ]
})
export class AppModule { }
