import { Injectable } from '@angular/core';
import { Usuarios } from './models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class GlobalComponent {
    public dominio: string = 'https://localhost:7102/'

    private _usuario: Usuarios = new Usuarios();
    public get usuario():Usuarios {
        return this._usuario;
    }
    public set usuario(user: Usuarios) {
        this._usuario = user;
    }

    constructor() { }
}