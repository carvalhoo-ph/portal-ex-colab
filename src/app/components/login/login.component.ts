import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'; // Importe Router
import { FormsModule } from '@angular/forms'; // Importe FormsModule aqui
import { HttpClient, HttpHeaders } from '@angular/common/http'; // Importe HttpClient e HttpHeaders aqui
import { ConfigService } from '../../services/config.service'; // Importe ConfigService

@Component({
  selector: 'app-login',
  standalone: true, // Adicione esta linha para tornar o componente standalone
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule] // Importe FormsModule aqui
})
export class LoginComponent {
  cpf: string = '';

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router,
    private configService: ConfigService // Adicione ConfigService ao construtor
  ) {}

  login() {
    console.log('CPF inserido:', this.cpf); // Adicione este log para verificar o valor do CPF
    const apiUrl = `${this.configService.getApiUrl()}/login?cpf=${this.cpf}`; // Use a URL base da API do ConfigService
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'User-Agent': 'portal-ex-colab/1.0'
    });

    this.http.post(apiUrl, {}, { headers }).subscribe((response: any) => {
      console.log('Resposta da API:', response); // Log da resposta da API
      if (response.valid) {
        this.authService.loginWithCPF(this.cpf); // Armazene o CPF no localStorage
        this.router.navigate(['/home']); // Redirecionar para a página inicial ou outra página
      } else {
        alert('CPF inválido. Tente novamente.');
      }
    }, error => {
      console.error('Erro ao chamar a API', error);
      alert('Erro ao chamar a API');
    });
  }
}

