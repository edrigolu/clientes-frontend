import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Cliente } from '../../interfaces/cliente';

@Component({
  selector: 'app-cliente-details',
  standalone: true,
  imports: [CommonModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatIconModule],
  templateUrl: './cliente-details.component.html',
  styleUrl: './cliente-details.component.css'
})
export class ClienteDetailsComponent {

   @Input() cliente!: Cliente;

}
