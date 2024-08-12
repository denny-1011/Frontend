import { Component, OnInit } from '@angular/core';
import { VentaService } from '../../servicios/venta.service';
import { Venta } from '../../modelos/venta';
import { Router } from '@angular/router';

@Component({
  selector: 'app-venta-form',
  templateUrl: './venta-form.component.html',
  styleUrls: ['./venta-form.component.css']
})
export class VentaFormComponent implements OnInit {

  venta: Venta = new Venta();

  constructor(private ventaService: VentaService, private router: Router) { }

  ngOnInit(): void { }

  save(): void {
    this.ventaService.createVenta(this.venta).subscribe(
      () => this.router.navigate(['/ventas/lista']),
      (error: any) => console.error(error)
    );
  }
}
