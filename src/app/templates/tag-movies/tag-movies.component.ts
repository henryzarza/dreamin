import { Component, OnInit, ViewEncapsulation } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-tag-movies',
  templateUrl: './tag-movies.component.html',
  styleUrls: ['./tag-movies.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TagMoviesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    jQuery('.tooltipped').tooltip({delay: 50});
  }

}
