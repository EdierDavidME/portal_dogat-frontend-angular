import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  router: any;

  constructor() { }

  ngOnInit(): void {
  }

  linkregistrar(){
    this.router.navigate(['registrar'])

  }

}
