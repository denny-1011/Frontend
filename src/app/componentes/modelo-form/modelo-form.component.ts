import { Component, OnInit } from '@angular/core';
import { ModeloService } from '../../servicios/modelo.service';
import { Modelo } from '../../modelos/modelo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modelo-form',
  templateUrl: './modelo-form.component.html',
  styleUrls: ['./modelo-form.component.css']
})
export class ModeloFormComponent implements OnInit {

  modelo: Modelo = new Modelo();

  constructor(private modeloService: ModeloService, private router: Router) { }

  ngOnInit(): void { }

  save(): void {
    this.modeloService.createModelo(this.modelo).subscribe(
      () => this.router.navigate(['/modelos/lista']),
      (error: any) => console.error(error)
    );
  }
}
