import { Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation, AfterViewChecked } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit, AfterViewChecked {

  public newUser = false;
  private noIsCreated = true;

  constructor(private route: Router) {}

  ngOnInit() {
    document.querySelector('.navbar-fixed').classList.add('hide');
  }

  ngAfterViewChecked() {
    if (this.noIsCreated && jQuery('select').length) {
      jQuery('select').material_select();
      this.noIsCreated =  false;
    }
  }

  private access() {
    localStorage.setItem('isLogged', 'true');
    document.querySelector('.navbar-fixed').classList.remove('hide');
    this.route.navigate(['/home']);
  }

}
