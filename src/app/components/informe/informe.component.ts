import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-informe',
  templateUrl: './informe.component.html',
  styleUrls: ['./informe.component.scss']
})
export class InformeComponent {
  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['home']);
  }
}
