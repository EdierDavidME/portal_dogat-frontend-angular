import { Component, OnInit } from '@angular/core';
import { ListadoMascotas } from '../mascota.model';
import { MascotaService } from '../service.mascota';

@Component({
  selector: 'app-mascotas-listado',
  templateUrl: './mascotas-listado.component.html',
  styleUrls: ['./mascotas-listado.component.css'],
  providers: [MascotaService],
})
export class MascotasListadoComponent implements OnInit {
  mascotas: ListadoMascotas[] = [];
  constructor(private mascotaService: MascotaService) {}

  ngOnInit(): void {
    this.mascotas = this.mascotaService.mascotas;
  }
}
