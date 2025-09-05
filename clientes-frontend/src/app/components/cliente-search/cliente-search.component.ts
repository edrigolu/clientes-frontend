import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Cliente } from '../../interfaces/cliente';
import { ClienteService } from '../../services/cliente.service';
import { ClienteDetailsComponent } from '../cliente-details/cliente-details.component';

@Component({
  selector: 'app-cliente-search',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    ClienteDetailsComponent,
    MatIconModule,
    MatSnackBarModule
  ],
  templateUrl: './cliente-search.component.html',
  styleUrl: './cliente-search.component.css',
})
export class ClienteSearchComponent {
   identificacion: string = '';
  cliente: Cliente | null = null;
  loading: boolean = false;
  error: string = '';
  private autoClearTimer: any;

  constructor(private clienteService: ClienteService,private snackBar: MatSnackBar) {}

  buscarCliente(): void {
    if (!this.identificacion.trim()) return;

    // Cancelar timer anterior si existe
    if (this.autoClearTimer) {
      clearTimeout(this.autoClearTimer);
    }

    this.loading = true;
    this.error = '';
    this.cliente = null;

    this.clienteService.buscarPorIdentificacion(this.identificacion).subscribe({
      next: (cliente) => {
        this.cliente = cliente;
        this.loading = false;
        
        // Auto-limpieza después de 5 segundos (éxito)
        this.autoClearTimer = setTimeout(() => {
          this.limpiarBusqueda();
          this.snackBar.open('Búsqueda limpiada automáticamente', 'Cerrar', {
            duration: 5000,
            panelClass: ['success-snackbar']
          });
        }, 5000);
      },
      error: (error) => {
        this.error = error.status === 404
          ? 'Cliente no encontrado'
          : 'Error al buscar el cliente';
        this.loading = false;
        
        // Auto-limpieza después de 5 segundos (error)
        this.autoClearTimer = setTimeout(() => {
          this.limpiarBusqueda();
          this.snackBar.open('Búsqueda limpiada automáticamente', 'Cerrar', {
            duration: 5000,
            panelClass: ['warn-snackbar']
          });
        }, 5000);
      },
    });
  }

  limpiarBusqueda(): void {
    this.identificacion = '';
    this.cliente = null;
    this.error = '';
    
    // Cancelar timer al limpiar manualmente
    if (this.autoClearTimer) {
      clearTimeout(this.autoClearTimer);
      this.autoClearTimer = null;
    }
  }

  // Limpiar timer cuando el componente se destruye
  ngOnDestroy() {
    if (this.autoClearTimer) {
      clearTimeout(this.autoClearTimer);
    }
  }


}
