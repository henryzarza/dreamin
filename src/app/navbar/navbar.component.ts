import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

declare let jQuery: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {

  public username: string;
  public photoUser: string;

  constructor(private route: Router) { }

  ngOnInit() {
    jQuery('.button-collapse').sideNav();
    this.username = localStorage.getItem('username');
    this.photoUser = localStorage.getItem('userphoto');
  }

  private closeSession() {
    localStorage.clear();
    this.route.navigate(['']);
  }

}
