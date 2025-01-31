import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Importar HttpClientModule
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing.module';

console.log('Bootstrap JavaScript is loaded');

// Use bootstrapApplication para inicializar o AppComponent
bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, FormsModule, HttpClientModule), // Incluir HttpClientModule aqui
    provideRouter(routes)
  ]
}).catch(err => console.error(err));