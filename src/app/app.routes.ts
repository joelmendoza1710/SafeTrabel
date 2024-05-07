import { Routes } from '@angular/router';
import { LoginComponent } from './Components/vistas/login/login.component';
import { BoardsComponent } from './Components/vistas/boards/boards.component';

export const routes: Routes = [
    {
        path: 'login', component : LoginComponent
    },
    
    {
        path: 'boards', component : BoardsComponent
    }
];
