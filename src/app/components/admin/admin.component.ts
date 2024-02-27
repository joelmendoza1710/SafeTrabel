import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
usuarios={
  titulo:['usuario','email','perfil','contraseña'],
  usuario:['joel','joel@gmail.com','admin','12345']
}
  constructor() { }

  ngOnInit(): void {
  }

}
