import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    RouterModule, // Importe o RouterModule aqui
    // Adicione aqui os módulos que o AppComponent precisa
  ]
})
export class AppComponent {
  title = 'portal-ex-colab';
}
