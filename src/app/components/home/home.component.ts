import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalComponent } from 'src/app/global.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  persona: string;
  constructor(private router: Router, private appGlobal: GlobalComponent) { 
    this.persona = this.appGlobal.usuario.nombre;
    console.log(this.appGlobal.usuario);
    console.log(this.appGlobal.usuario.nombre);
    console.log(this.persona);
  }

  ngOnInit(): void {
  }

<<<<<<< HEAD
  linkhome(){
    this.router.navigate(['home'])

  }


  

}
=======
}
>>>>>>> d0543466f122d6ef516dab30e0a543a867e83be0
