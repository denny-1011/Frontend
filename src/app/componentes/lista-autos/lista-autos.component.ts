import { Component, OnInit } from '@angular/core';
import { AutoService } from '../../servicios/auto.service';
import { Auto } from '../../modelos/auto';

@Component({
  selector: 'app-lista-autos',
  templateUrl: './lista-autos.component.html',
  styleUrls: ['./lista-autos.component.css']
})
export class ListaAutosComponent implements OnInit {
  autos: Auto[] = [];

  constructor(private autoService: AutoService) { }

  ngOnInit(): void {
    this.getAutos();
  }

  getAutos(): void {
    this.autoService.getAutos().subscribe(
      (data: Auto[]) => this.autos = data,
      (error: any) => console.error(error)
    );
  }
}
