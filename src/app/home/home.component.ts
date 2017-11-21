import { Component, OnInit, ViewEncapsulation } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    jQuery('.tooltipped').tooltip({delay: 50});
    jQuery('.dropdown-button').dropdown();
  }

}
