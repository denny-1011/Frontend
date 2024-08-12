import { Component, OnInit } from '@angular/core';
import { AutoService } from '../../servicios/auto.service';
import { Auto } from '../../modelos/auto';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalle-auto',
  templateUrl: './detalle-auto.component.html',
  styleUrls: ['./detalle-auto.component.css']
})
export class DetalleAutoComponent implements OnInit {

  auto: Auto = {} as Auto; // Inicializa con un objeto vacío o marca como opcional

  constructor(
    private autoService: AutoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.autoService.getAuto(id).subscribe(auto => this.auto = auto);
    } else {
      console.error('ID no válido');
      this.router.navigate(['/autos']);
    }
  }

  delete(): void {
    if (this.auto && confirm('¿Estás seguro de que deseas eliminar este auto?')) {
      this.autoService.deleteAuto(this.auto.id).subscribe(() => this.router.navigate(['/autos']));
    }
  }
}
