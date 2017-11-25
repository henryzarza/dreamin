import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CrudService } from '../services/crud.service';

declare var jQuery: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  public users: any;

  constructor(private crud: CrudService) { }

  ngOnInit() {
    this.crud.get('users.json').subscribe(
      data => this.users = data,
      error => console.log(error)
    );

    jQuery('.tooltipped').tooltip({delay: 50});
    jQuery('.dropdown-button').dropdown();
  }

  private toggleActive(selector: string) {
    document.querySelector('#' + selector).classList.toggle('active');
  }

}
