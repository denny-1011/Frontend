import { Component, OnInit } from '@angular/core';
import { ModeloService } from '../../servicios/modelo.service';
import { Modelo } from '../../modelos/modelo';

@Component({
  selector: 'app-lista-modelos',
  templateUrl: './lista-modelos.component.html',
  styleUrls: ['./lista-modelos.component.css']
})
export class ListaModelosComponent implements OnInit {

  modelos: Modelo[] = [];

  constructor(private modeloService: ModeloService) { }

  ngOnInit(): void {
    this.getModelos();
  }

  getModelos(): void {
    this.modeloService.getModelos().subscribe(
      (data: Modelo[]) => this.modelos = data,
      (error: any) => console.error(error)
    );
  }
}
