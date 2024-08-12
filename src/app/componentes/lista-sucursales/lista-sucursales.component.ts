import { Component, OnInit } from '@angular/core';
import { SucursalService } from '../../servicios/sucursal.service';
import { Sucursal } from '../../modelos/sucursal';

@Component({
  selector: 'app-lista-sucursales',
  templateUrl: './lista-sucursales.component.html',
  styleUrls: ['./lista-sucursales.component.css']
})
export class ListaSucursalesComponent implements OnInit {

  sucursales: Sucursal[] = [];

  constructor(private sucursalService: SucursalService) { }

  ngOnInit(): void {
    this.getSucursales();
  }

  getSucursales(): void {
    this.sucursalService.getSucursales().subscribe(
      (data: Sucursal[]) => this.sucursales = data,
      (error: any) => console.error(error)
    );
  }
}
