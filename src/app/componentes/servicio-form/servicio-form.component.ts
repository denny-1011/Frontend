import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicios/servicio.service';
import { Servicio } from '../../modelos/servicio';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicio-form',
  templateUrl: './servicio-form.component.html',
  styleUrls: ['./servicio-form.component.css']
})
export class ServicioFormComponent implements OnInit {

  servicio: Servicio = new Servicio();

  constructor(private servicioService: ServicioService, private router: Router) { }

  ngOnInit(): void { }

  save(): void {
    this.servicioService.createServicio(this.servicio).subscribe(
      () => this.router.navigate(['/servicios/lista']),
      (error: any) => console.error(error)
    );
  }
}
