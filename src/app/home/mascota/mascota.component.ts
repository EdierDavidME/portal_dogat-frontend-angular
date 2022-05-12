import { Component, Input, OnInit } from '@angular/core';
import { ListadoMascotas } from '../mascota.model';
import { MascotaService } from '../service.mascota';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css'],
  providers: [MascotaService],
})
export class MascotaComponent implements OnInit {
  @Input() mascota: ListadoMascotas;

  constructor(private mascotaService: MascotaService) {}

  ngOnInit(): void {}
}
