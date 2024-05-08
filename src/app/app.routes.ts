import { Routes } from '@angular/router';
import { LoginComponent } from './Components/vistas/login/login.component';
import { BoardsComponent } from './Components/vistas/boards/boards.component';
import { HomeComponent } from './Components/vistas/home/home.component';
import { CalificarsitioComponent } from './Components/vistas/calificarsitio/calificarsitio.component';

export const routes: Routes = [
    {
        path: 'login', component : LoginComponent
    },
    
    {
        path: 'boards', component : BoardsComponent
    },

    {
        path: 'home',  component : HomeComponent
    },
    {
        path: 'calificar',  component : CalificarsitioComponent
    },

];
