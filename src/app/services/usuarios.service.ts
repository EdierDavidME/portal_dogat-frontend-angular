import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalComponent } from '../global.component';
import { Usuarios } from '../models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private url: string;

  constructor(private _http: HttpClient, private appGlobal: GlobalComponent) {
    this.url = this.appGlobal.dominio + 'api/usuarios/';
  }

  public login(credenciales: string[]) {
    return this._http.post<Usuarios>(this.url + "autenticacionusuario", credenciales);
  }

  public nuevoUsuario(user: Usuarios) {
    return this._http.post<number>(this.url + "nuevousuario", user);
  }

  public modificarUsuario(user: Usuarios) {
    return this._http.put<boolean>(this.url + "modificarusuario", user);
  }
}
