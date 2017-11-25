import { Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation, AfterViewChecked } from '@angular/core';
import { CrudService } from '../services/crud.service';

declare var jQuery: any;
declare var Dropzone: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit, AfterViewChecked {

  public newUser = false;
  public messageError: string;

  private noIsCreated = true;

  constructor(private route: Router, private crud: CrudService) {
    Dropzone.autoDiscover = false;
  }

  ngOnInit() {
    document.querySelector('.navbar-fixed').classList.add('hide');
  }

  ngAfterViewChecked() {
    if (this.noIsCreated && jQuery('select').length) {
      jQuery('select').material_select();
      this.noIsCreated =  false;
    }
  }

  private showFormRegister() {
    this.newUser = true;
    setTimeout(() => {
      jQuery('#dropzone-img-profile').dropzone({
        url: '/assets/users',
        maxFiles: 1,
        acceptedFiles: 'image/*'
      });
    }, 0);
  }

  private access(username: string, password: string) {
    if (username && password) {
      this.crud.get('users.json').subscribe(
        response => {
          const data: any = response;
          const aux = data.find(element => element['username'] === username && element['password'] === password);
          if (aux) {
            localStorage.setItem('isLogged', 'true');
            localStorage.setItem('username', aux['username']);
            localStorage.setItem('userphoto', aux['photo']);
            document.querySelector('.navbar-fixed').classList.remove('hide');
            document.querySelector('.img-navbar').setAttribute('src', `assets/users/${aux['photo']}`);
            document.querySelector('#username').innerHTML = aux['username'];
            this.route.navigate(['/home']);
          } else {
            this.messageError = 'Datos incorrectos';
          }
        },
        error => console.log(error)
      );
    } else {
      this.messageError = 'Completa todos los campos';
    }
  }

}
