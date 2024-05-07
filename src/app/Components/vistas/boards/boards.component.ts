import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-boards',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './boards.component.html',
  styleUrl: './boards.component.scss'
})
export class BoardsComponent {

}
