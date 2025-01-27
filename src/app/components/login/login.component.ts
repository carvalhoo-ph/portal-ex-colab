import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'; // Importe Router
import { FormsModule } from '@angular/forms'; // Importe FormsModule aqui

@Component({
  selector: 'app-login',
  standalone: true, // Adicione esta linha para tornar o componente standalone
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule] // Importe FormsModule aqui
})
export class LoginComponent {
  cpf: string = '';

  constructor(private authService: AuthService, private router: Router) {} // Adicione Router ao construtor

  login() {
    console.log('CPF inserido:', this.cpf); // Adicione este log para verificar o valor do CPF
    if (this.authService.loginWithCPF(this.cpf)) {
      this.router.navigate(['/home']); // Redirecionar para a página inicial ou outra página
    } else {
      // Mostrar mensagem de erro
      alert('CPF inválido. Tente novamente.');
    }
  }
}
