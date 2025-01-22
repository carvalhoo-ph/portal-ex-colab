import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InformeComponent } from './components/informe/informe.component';
import { DemonstrativoComponent } from './components/demonstrativo/demonstrativo.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, },
  { path: 'home', component: HomeComponent, },
  { path: 'informe', component: InformeComponent, },
  { path: 'demonstrativo', component: DemonstrativoComponent,} ,
  { path: '**', component: HomeComponent, },
];
