import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicios/servicio.service';
import { Servicio } from '../../modelos/servicio';

@Component({
  selector: 'app-lista-servicios',
  templateUrl: './lista-servicios.component.html',
  styleUrls: ['./lista-servicios.component.css']
})
export class ListaServiciosComponent implements OnInit {

  servicios: Servicio[] = [];

  constructor(private servicioService: ServicioService) { }

  ngOnInit(): void {
    this.getServicios();
  }

  getServicios(): void {
    this.servicioService.getServicios().subscribe(
      (data: Servicio[]) => this.servicios = data,
      (error: any) => console.error(error)
    );
  }
}
