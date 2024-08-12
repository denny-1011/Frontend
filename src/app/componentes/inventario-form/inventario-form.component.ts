import { Component, OnInit } from '@angular/core';
import { InventarioService } from '../../servicios/inventario.service';
import { Inventario } from '../../modelos/inventario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventario-form',
  templateUrl: './inventario-form.component.html',
  styleUrls: ['./inventario-form.component.css']
})
export class InventarioFormComponent implements OnInit {

  inventario: Inventario = new Inventario();

  constructor(private inventarioService: InventarioService, private router: Router) { }

  ngOnInit(): void { }

  save(): void {
    this.inventarioService.createInventario(this.inventario).subscribe(
      () => this.router.navigate(['/inventario/lista']),
      (error: any) => console.error(error)
    );
  }
}
