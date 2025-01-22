import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
// ...importações adicionais...

@NgModule({
  declarations: [
    // ...outros componentes...
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Remova o AppComponent daqui
    // ...outros módulos...
  ],
  providers: [],
  // Remova o bootstrap do AppComponent
})
export class AppModule { }
