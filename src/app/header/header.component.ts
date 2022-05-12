import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showFiller = false;

  constructor(private router: Router ) { }

  ngOnInit(): void {
  }

  linklogin(){
    this.router.navigate(['login'])

    
  }
  linkregistrar(){
    this.router.navigate(['registrar'])

  }
}
