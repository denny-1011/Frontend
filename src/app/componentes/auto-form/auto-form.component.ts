import { Component } from '@angular/core';
import { AutoService } from '../../servicios/auto.service';
import { Auto } from '../../modelos/auto';

@Component({
  selector: 'app-auto-form',
  templateUrl: './auto-form.component.html',
  styleUrls: ['./auto-form.component.css']
})
export class AutoFormComponent {
 // auto: Auto = new Auto();

  constructor(private autoService: AutoService) { }

  /*addAuto(): void {
    this.autoService.getAuto(this.auto).subscribe(
      () => {
        console.log('Auto agregado correctamente');
        // Redirigir a la lista de autos o mostrar un mensaje de éxito
      },
      (error: any) => console.error(error)
    );
  }*/
}
