import { Component, OnInit } from '@angular/core';
import { ProveedorService } from '../../servicios/proveedor.service';
import { Proveedor } from '../../modelos/proveedor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proveedor-form',
  templateUrl: './proveedor-form.component.html',
  styleUrls: ['./proveedor-form.component.css']
})
export class ProveedorFormComponent implements OnInit {

  proveedor: Proveedor = new Proveedor();

  constructor(private proveedorService: ProveedorService, private router: Router) { }

  ngOnInit(): void { }

  save(): void {
    this.proveedorService.createProveedor(this.proveedor).subscribe(
      () => this.router.navigate(['/proveedores/lista']),
      (error: any) => console.error(error)
    );
  }
}
