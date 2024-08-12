import { Component, OnInit } from '@angular/core';
import { MarcaService } from '../../servicios/marca.service';
import { Marca } from '../../modelos/marca';

@Component({
  selector: 'app-lista-marcas',
  templateUrl: './lista-marcas.component.html',
  styleUrls: ['./lista-marcas.component.css']
})
export class ListaMarcasComponent implements OnInit {

  marcas: Marca[] = [];

  constructor(private marcaService: MarcaService) { }

  ngOnInit(): void {
    this.getMarcas();
  }

  getMarcas(): void {
    this.marcaService.getMarcas().subscribe(
      (data: Marca[]) => this.marcas = data,
      (error: any) => console.error(error)
    );
  }
}
