import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private apiUrl: string;

  constructor() {
    if (window.location.hostname === 'localhost') {
      this.apiUrl = '/prod'; // Use o proxy durante o desenvolvimento
    } else {
      this.apiUrl = 'https://s0wjhpjt93.execute-api.us-east-1.amazonaws.com/prod'; // Use a URL completa da API em produção
    }
  }

  getApiUrl(): string {
    return this.apiUrl;
  }
}
