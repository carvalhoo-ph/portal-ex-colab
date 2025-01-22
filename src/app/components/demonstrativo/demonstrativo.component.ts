import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demonstrativo',
  templateUrl: './demonstrativo.component.html',
  styleUrls: ['./demonstrativo.component.scss']
})
export class DemonstrativoComponent {
  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['home']);
  }
}
