import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vendedor } from '../modelos/vendedor';

@Injectable({
  providedIn: 'root'
})
export class VendedorService {

  private apiUrl = 'http://localhost:7006/api/vendedores'; // URL a la API

  constructor(private http: HttpClient) { }

  getVendedores(): Observable<Vendedor[]> {
    return this.http.get<Vendedor[]>(this.apiUrl);
  }

  createVendedor(vendedor: Vendedor): Observable<Vendedor> {
    return this.http.post<Vendedor>(this.apiUrl, vendedor);
  }
}
