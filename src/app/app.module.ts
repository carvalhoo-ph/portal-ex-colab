import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
// ...importações adicionais...

@NgModule({
  declarations: [
    // ...outros componentes...
  ],
  imports: [
    BrowserModule,
    FormsModule, // Adicione FormsModule aqui
    // Remova LoginComponent e NavComponent das importações
    // ...outros módulos...
  ],
  providers: []
})
export class AppModule { }
