import { Component, OnInit } from '@angular/core';
import { VentaService } from '../../servicios/venta.service';
import { Venta } from '../../modelos/venta';

@Component({
  selector: 'app-lista-ventas',
  templateUrl: './lista-ventas.component.html',
  styleUrls: ['./lista-ventas.component.css']
})
export class ListaVentasComponent implements OnInit {

  ventas: Venta[] = [];

  constructor(private ventaService: VentaService) { }

  ngOnInit(): void {
    this.getVentas();
  }

  getVentas(): void {
    this.ventaService.getVentas().subscribe(
      (data: Venta[]) => this.ventas = data,
      (error: any) => console.error(error)
    );
  }
}
