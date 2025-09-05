import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ClienteSearchComponent } from './components/cliente-search/cliente-search.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    ClienteSearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clientes-frontend';
}
