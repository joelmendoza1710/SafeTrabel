import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { VisitanteComponent } from './components/visitante/visitante.component';

const routes: Routes = [
  {
    path:'login', component: LoginComponent,pathMatch:'full'
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path:'admin', component: AdminComponent,pathMatch:'full'
  },
  {
    path:'visitante', component: VisitanteComponent,pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
