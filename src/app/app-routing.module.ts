import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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



const routes: Routes = [
  { path: 'autos/lista', component: ListaAutosComponent },
  { path: 'autos/nuevo', component: AutoFormComponent },
  { path: '', redirectTo: '/autos/lista', pathMatch: 'full' }, // Redirección predeterminada
  { path: 'clientes/lista', component: ListaClientesComponent },
  { path: 'clientes/nuevo', component: ClienteFormComponent },
  { path: 'vendedores/lista', component: ListaVendedoresComponent },
  { path: 'vendedores/nuevo', component: VendedorFormComponent },
  { path: 'ventas/lista', component: ListaVentasComponent },
  { path: 'ventas/nuevo', component: VentaFormComponent },
  { path: 'inventario/lista', component: ListaInventarioComponent },
  { path: 'inventario/nuevo', component: InventarioFormComponent },
  { path: 'proveedores/lista', component: ListaProveedoresComponent },
  { path: 'proveedores/nuevo', component: ProveedorFormComponent },
  { path: 'sucursales/lista', component: ListaSucursalesComponent },
  { path: 'sucursales/nuevo', component: SucursalFormComponent },
  { path: 'marcas/lista', component: ListaMarcasComponent },
  { path: 'marcas/nuevo', component: MarcaFormComponent },
  { path: 'modelos/lista', component: ListaModelosComponent },
  { path: 'modelos/nuevo', component: ModeloFormComponent },
  { path: 'servicios/lista', component: ListaServiciosComponent },
  { path: 'servicios/nuevo', component: ServicioFormComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
