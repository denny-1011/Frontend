import { Component, OnInit } from '@angular/core';
import { ProveedorService } from '../../servicios/proveedor.service';
import { Proveedor } from '../../modelos/proveedor';

@Component({
  selector: 'app-lista-proveedores',
  templateUrl: './lista-proveedores.component.html',
  styleUrls: ['./lista-proveedores.component.css']
})
export class ListaProveedoresComponent implements OnInit {

  proveedores: Proveedor[] = [];

  constructor(private proveedorService: ProveedorService) { }

  ngOnInit(): void {
    this.getProveedores();
  }

  getProveedores(): void {
    this.proveedorService.getProveedores().subscribe(
      (data: Proveedor[]) => this.proveedores = data,
      (error: any) => console.error(error)
    );
  }
}
