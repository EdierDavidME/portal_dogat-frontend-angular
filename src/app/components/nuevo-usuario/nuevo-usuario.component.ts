import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalComponent } from 'src/app/global.component';
import { Usuarios } from 'src/app/models/usuarios';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {

  form = new FormGroup({
    nombre: new FormControl(''),
    cedula: new FormControl(''),
    contrasena: new FormControl(''),
    correo: new FormControl(''),
    telefono: new FormControl(''),
    celular: new FormControl(''),
    ciudad: new FormControl(''),
    gridCheck: new FormControl(false)
  });

  constructor(private usuariosService: UsuariosService, private appGlobal: GlobalComponent, private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    if(this.form.invalid) {
      alert("Debe llenar todos los campos");
      return;
    }

    if(this.form.get('gridCheck')?.value) {
      let nuevoUsuario: Usuarios = new Usuarios();
      nuevoUsuario.cedula_Nit = this.form.get('cedula')?.value;
      nuevoUsuario.nombre = this.form.get('nombre')?.value;
      nuevoUsuario.correo = this.form.get('correo')?.value;
      nuevoUsuario.contrasena = this.form.get('contrasena')?.value;
      nuevoUsuario.rol = 2;

      this.usuariosService.nuevoUsuario(nuevoUsuario).subscribe(id => {
        if(id > 0) {
          alert("Registro satisfactorio");
          nuevoUsuario.id = id;
          this.appGlobal.usuario = nuevoUsuario;
          this.router.navigate(['home']);
        }
      });
    }
    else
      alert("Debe autorizar el tratamiento de los datos");
  }

}
