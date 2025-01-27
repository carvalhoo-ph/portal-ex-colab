import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticated: boolean = false;

  constructor() {
    this.authenticated = localStorage.getItem('isLoggedIn') === 'true';
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }

  login() {
    this.authenticated = true;
    localStorage.setItem('isLoggedIn', 'true');
  }

  loginWithCPF(cpf: string): boolean {
    if (cpf === '12345678901') {
      this.authenticated = true;
      localStorage.setItem('isLoggedIn', 'true');
      return true;
    }
    return false;
  }

  logout() {
    this.authenticated = false;
    localStorage.removeItem('isLoggedIn');
  }
}
