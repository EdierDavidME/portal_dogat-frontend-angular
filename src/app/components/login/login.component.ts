import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalComponent } from 'src/app/global.component';
import { Usuarios } from 'src/app/models/usuarios';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    usuario: new FormControl(''),
    contrasena: new FormControl('')
  });

  constructor(private usuarioService: UsuariosService, private appGlobal: GlobalComponent, private router: Router) { }

  ngOnInit(): void {
  }

  linklogin(){

    if(this.form.get('usuario')?.value?.length > 0 || this.form.get('contrasena')?.value?.length > 0) {

      let credenciales: string[] = [
        this.form.get('usuario')?.value,
        this.form.get('contrasena')?.value,
      ];

      this.usuarioService.login(credenciales).subscribe(usuario => {
        this.appGlobal.usuario = usuario;

        if(this.appGlobal.usuario?.id > 0)
          this.router.navigate(['home']);
        else
          alert('Usuario o contraseña invalida');
      });
    }
  }
  

}
