import { Injectable } from '@angular/core';
import { ConfigService } from './config.service'; // Importe ConfigService

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticated: boolean = false;

  constructor(private configService: ConfigService) { // Adicione ConfigService ao construtor
    if (typeof window !== 'undefined' && localStorage.getItem('isLoggedIn') === 'true') {
      this.authenticated = true;
    }
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }

  login() {
    this.authenticated = true;
    if (typeof window !== 'undefined') {
      localStorage.setItem('isLoggedIn', 'true');
    }
  }

  loginWithCPF(cpf: string): void {
    this.authenticated = true;
    if (typeof window !== 'undefined') {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('cpf', cpf); // Armazene o CPF no localStorage
    }
  }

  logout() {
    this.authenticated = false;
    if (typeof window !== 'undefined') {
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('cpf'); // Remova o CPF do localStorage ao fazer logout
    }
  }

  getCPF(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('cpf');
    }
    return null;
  }
}
