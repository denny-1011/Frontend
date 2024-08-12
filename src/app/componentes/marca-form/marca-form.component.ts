import { Component, OnInit } from '@angular/core';
import { MarcaService } from '../../servicios/marca.service';
import { Marca } from '../../modelos/marca';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marca-form',
  templateUrl: './marca-form.component.html',
  styleUrls: ['./marca-form.component.css']
})
export class MarcaFormComponent implements OnInit {

  marca: Marca = new Marca();

  constructor(private marcaService: MarcaService, private router: Router) { }

  ngOnInit(): void { }

  save(): void {
    this.marcaService.createMarca(this.marca).subscribe(
      () => this.router.navigate(['/marcas/lista']),
      (error: any) => console.error(error)
    );
  }
}
