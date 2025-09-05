import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Cliente } from '../interfaces/cliente';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private apiUrl = 'https://localhost:44324/api/clientes';

  constructor(private http: HttpClient) {}

  buscarPorIdentificacion(identificacion: string): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.apiUrl}/${identificacion}`).pipe(
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }
}
