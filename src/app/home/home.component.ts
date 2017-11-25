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
  public allUsers: any;

  constructor(private crud: CrudService) { }

  ngOnInit() {
    this.crud.get('users.json').subscribe(
      data => {
        this.users = data;
        this.allUsers = data;
      },
      error => console.log(error)
    );
    this.inicializateSelect();
    jQuery('.tooltipped').tooltip({delay: 50});
  }

  private inicializateSelect() {
    jQuery('#select-filter').material_select();
    jQuery('#select-filter').on('change', () => {
      if (jQuery('#select-filter').val() === '0') {
        this.users = this.allUsers;
      } else {
        this.users = this.allUsers.filter(data => +data['typeModality'] === +jQuery('#select-filter').val());
      }
    });
  }

  private toggleActive(selector: string) {
    document.querySelector('#' + selector).classList.toggle('active');
  }
}
