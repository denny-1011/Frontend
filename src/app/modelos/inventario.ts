export class Inventario {
  id: number;
  autoId: number;
  cantidad: number;
  fechaIngreso: string;

  constructor() {
    this.id = 0;
    this.autoId = 0;
    this.cantidad = 0;
    this.fechaIngreso = '';
  }
}
