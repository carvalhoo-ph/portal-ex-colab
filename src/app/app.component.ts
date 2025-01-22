import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true, // Certifique-se de que está configurado como standalone
  imports: [
    // Adicione aqui os módulos que o AppComponent precisa
  ]
})
export class AppComponent {
  title = 'portal-ex-colab';
}
