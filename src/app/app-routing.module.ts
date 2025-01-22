import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DemonstrativoComponent } from './components/demonstrativo/demonstrativo.component';
import { InformeComponent } from './components/informe/informe.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent, },
  { path: 'demonstrativo', component: DemonstrativoComponent },
  { path: 'informe', component: InformeComponent },
  { path: '**', component: HomeComponent, },
  // ...outras rotas...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
