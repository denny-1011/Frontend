import { Component, OnInit } from '@angular/core';
import { VendedorService } from '../../servicios/vendedor.service';
import { Vendedor } from '../../modelos/vendedor';

@Component({
  selector: 'app-lista-vendedores',
  templateUrl: './lista-vendedores.component.html',
  styleUrls: ['./lista-vendedores.component.css']
})
export class ListaVendedoresComponent implements OnInit {

  vendedores: Vendedor[] = [];

  constructor(private vendedorService: VendedorService) { }

  ngOnInit(): void {
    this.getVendedores();
  }

  getVendedores(): void {
    this.vendedorService.getVendedores().subscribe(
      (data: Vendedor[]) => this.vendedores = data,
      (error: any) => console.error(error)
    );
  }
}
