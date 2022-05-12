import { Injectable } from '@angular/core';
import { ListadoMascotas } from './mascota.model';

@Injectable()
export class MascotaService {
  mascotas: ListadoMascotas[] = [
    new ListadoMascotas(
      1,
      'Mascota 1 -> Test',
      'Raza 1',
      'assets/img/mascotas/m1.jpg',
      'Descripción 1',
      'Estado 1',
      'Fecha ingreso 1',
      'Fecha salida 1',
      'Fecha adopción 1',
      1,
      'Fecha nacimiento 1',
      'Genero 1'
    ),
    new ListadoMascotas(
      2,
      'Mascota 2',
      'Raza 2',
      'assets/img/mascotas/m2.jpg',
      'Descripción 2',
      'Estado 2',
      'Fecha ingreso 2',
      'Fecha salida 2',
      'Fecha adopción 2',
      2,
      'Fecha nacimiento 2',
      'Genero 2'
    ),
  ];

  addMascota(mascota: ListadoMascotas): void {
    this.mascotas.push(mascota);
  }
}
