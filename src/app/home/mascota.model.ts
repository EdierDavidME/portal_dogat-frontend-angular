export class ListadoMascotas {
  constructor(
    public id: number,
    public nombre: string,
    public raza: string,
    public imagen: string,
    public descripcion: string,
    public estado: string,
    public fecha_ingreso: string,
    public fecha_salida: string,
    public fecha_adopcion: string,
    public edad?: number,
    public fecha_nacimiento?: string,
    public genero?: string
  ) {}
}
