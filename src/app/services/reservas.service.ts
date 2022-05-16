import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  private BASE_URL = "localhost:8080/reservas";

  constructor(private readonly http: HttpClient) { }

  public obtenerListaDeReservas(usuario: String): Observable<object> {
    return this.http.get(`${this.BASE_URL}/${usuario}`);
  }
}
