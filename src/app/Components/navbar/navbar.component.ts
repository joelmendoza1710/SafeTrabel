import { Component } from '@angular/core';
import {LayoutModule} from '@angular/cdk/layout';
import { OverlayModule } from '@angular/cdk/overlay';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LayoutModule,OverlayModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isOpen = false;
}
