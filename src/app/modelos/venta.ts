export class Venta {
  id: number;
  autoId: number;
  clienteId: number;
  vendedorId: number;
  fechaVenta: string;
  precioVenta: number;

  constructor() {
    this.id = 0;
    this.autoId = 0;
    this.clienteId = 0;
    this.vendedorId = 0;
    this.fechaVenta = '';
    this.precioVenta = 0;
  }
}
