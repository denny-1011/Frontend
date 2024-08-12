import { Component, OnInit } from '@angular/core';
import { VendedorService } from '../../servicios/vendedor.service';
import { Vendedor } from '../../modelos/vendedor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendedor-form',
  templateUrl: './vendedor-form.component.html',
  styleUrls: ['./vendedor-form.component.css']
})
export class VendedorFormComponent implements OnInit {

  vendedor: Vendedor = new Vendedor();

  constructor(private vendedorService: VendedorService, private router: Router) { }

  ngOnInit(): void { }

  save(): void {
    this.vendedorService.createVendedor(this.vendedor).subscribe(
      () => this.router.navigate(['/vendedores/lista']),
      (error: any) => console.error(error)
    );
  }
}
