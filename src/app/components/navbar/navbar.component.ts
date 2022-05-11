import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalComponent } from 'src/app/global.component';
import { Usuarios } from 'src/app/models/usuarios';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public nombreUsuario: string = '';

  constructor(private router: Router, public appGlobal: GlobalComponent ) {
    this.nombreUsuario = this.appGlobal.usuario.nombre;
  }
  ngOnInit(): void {}

  linkoutlogin() {
    this.appGlobal.usuario = new Usuarios();
  }
  linkregistrar(){
    this.router.navigate(['registrar']);

  }
}
