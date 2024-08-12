import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';  // Importamos directamente el RouterModule aquí
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListaAutosComponent } from './componentes/lista-autos/lista-autos.component';
import { AutoFormComponent } from './componentes/auto-form/auto-form.component';
import { ListaClientesComponent } from './componentes/lista-clientes/lista-clientes.component';
import { ClienteFormComponent } from './componentes/cliente-form/cliente-form.component';
import { ListaVendedoresComponent } from './componentes/lista-vendedores/lista-vendedores.component';
import { VendedorFormComponent } from './componentes/vendedor-form/vendedor-form.component';
import { ListaVentasComponent } from './componentes/lista-ventas/lista-ventas.component';
import { VentaFormComponent } from './componentes/venta-form/venta-form.component';
import { ListaInventarioComponent } from './componentes/lista-inventario/lista-inventario.component';
import { InventarioFormComponent } from './componentes/inventario-form/inventario-form.component';
import { ListaProveedoresComponent } from './componentes/lista-proveedores/lista-proveedores.component';
import { ProveedorFormComponent } from './componentes/proveedor-form/proveedor-form.component';
import { ListaSucursalesComponent } from './componentes/lista-sucursales/lista-sucursales.component';
import { SucursalFormComponent } from './componentes/sucursal-form/sucursal-form.component';
import { ListaMarcasComponent } from './componentes/lista-marcas/lista-marcas.component';
import { MarcaFormComponent } from './componentes/marca-form/marca-form.component';
import { ListaModelosComponent } from './componentes/lista-modelos/lista-modelos.component';
import { ModeloFormComponent } from './componentes/modelo-form/modelo-form.component';
import { ListaServiciosComponent } from './componentes/lista-servicios/lista-servicios.component';
import { ServicioFormComponent } from './componentes/servicio-form/servicio-form.component';


import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ListaAutosComponent,
    AutoFormComponent,
    ListaClientesComponent,
    ClienteFormComponent,
    ListaVendedoresComponent,
    VendedorFormComponent,
    ListaVentasComponent,
    VentaFormComponent,
    ListaInventarioComponent,
    InventarioFormComponent,
    ListaProveedoresComponent,
    ProveedorFormComponent,
    ListaSucursalesComponent,
    SucursalFormComponent,
    ListaMarcasComponent,
    MarcaFormComponent,
    ListaModelosComponent,
    ModeloFormComponent,
    ListaServiciosComponent,
    ServicioFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,  
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
