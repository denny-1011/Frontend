import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sucursal } from '../modelos/sucursal';

@Injectable({
  providedIn: 'root'
})
export class SucursalService {

  private apiUrl = 'http://localhost:7006/api/sucursales'; // URL a la API

  constructor(private http: HttpClient) { }

  getSucursales(): Observable<Sucursal[]> {
    return this.http.get<Sucursal[]>(this.apiUrl);
  }

  createSucursal(sucursal: Sucursal): Observable<Sucursal> {
    return this.http.post<Sucursal>(this.apiUrl, sucursal);
  }
}
