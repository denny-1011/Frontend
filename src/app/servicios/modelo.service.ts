import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Modelo } from '../modelos/modelo';

@Injectable({
  providedIn: 'root'
})
export class ModeloService {

  private apiUrl = 'http://localhost:7006/api/modelos'; // Ajusta la URL a la de tu API

  constructor(private http: HttpClient) { }

  getModelos(): Observable<Modelo[]> {
    return this.http.get<Modelo[]>(this.apiUrl);
  }

  createModelo(modelo: Modelo): Observable<Modelo> {
    return this.http.post<Modelo>(this.apiUrl, modelo);
  }
}
