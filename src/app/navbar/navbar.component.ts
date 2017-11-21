import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

declare let jQuery: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
    jQuery('.button-collapse').sideNav();
  }

  private closeSession() {
    localStorage.clear();
    this.route.navigate(['']);
  }

}
