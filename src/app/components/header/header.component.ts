import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalComponent } from 'src/app/global.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public nombreUsuario: string = '';

  constructor(private router: Router, public appGlobal: GlobalComponent ) {
    this.nombreUsuario = this.appGlobal.usuario.nombre;
  }

  ngOnInit(): void {
  }

  linklogin(){
    this.router.navigate(['login'])

    
  }
  linkregistrar(){
    this.router.navigate(['registrar'])

  }
}
