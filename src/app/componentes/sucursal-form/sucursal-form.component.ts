import { Component, OnInit } from '@angular/core';
import { SucursalService } from '../../servicios/sucursal.service';
import { Sucursal } from '../../modelos/sucursal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sucursal-form',
  templateUrl: './sucursal-form.component.html',
  styleUrls: ['./sucursal-form.component.css']
})
export class SucursalFormComponent implements OnInit {

  sucursal: Sucursal = new Sucursal();

  constructor(private sucursalService: SucursalService, private router: Router) { }

  ngOnInit(): void { }

  save(): void {
    this.sucursalService.createSucursal(this.sucursal).subscribe(
      () => this.router.navigate(['/sucursales/lista']),
      (error: any) => console.error(error)
    );
  }
}
