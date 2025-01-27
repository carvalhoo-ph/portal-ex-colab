import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Corrigido para importar do @angular/router

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule],
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor(private router: Router) {}

  isLoginPage(): boolean {
    return this.router.url === '/login';
  }

  logout() {
    // Limpe a informação de login
    localStorage.removeItem('isLoggedIn');
    // Redirecione para a página de login
    this.router.navigate(['/login']);
  }

  navigateToHome() {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}