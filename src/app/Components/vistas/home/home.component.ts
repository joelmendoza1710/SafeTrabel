import { Component } from '@angular/core';
import { NavbarprincipalComponent } from '../../navbarprincipal/navbarprincipal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarprincipalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
