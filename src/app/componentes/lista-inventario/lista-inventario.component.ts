import { Component, OnInit } from '@angular/core';
import { InventarioService } from '../../servicios/inventario.service';
import { Inventario } from '../../modelos/inventario';

@Component({
  selector: 'app-lista-inventario',
  templateUrl: './lista-inventario.component.html',
  styleUrls: ['./lista-inventario.component.css']
})
export class ListaInventarioComponent implements OnInit {

  inventario: Inventario[] = [];

  constructor(private inventarioService: InventarioService) { }

  ngOnInit(): void {
    this.getInventario();
  }

  getInventario(): void {
    this.inventarioService.getInventario().subscribe(
      (data: Inventario[]) => this.inventario = data,
      (error: any) => console.error(error)
    );
  }
}
